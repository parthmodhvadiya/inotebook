import React, { useState ,useContext } from "react";
import { useNavigate } from "react-router-dom";


const Login = (props) => {
    const {showAlert} = props;
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleOnClick = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if (json.sucess) {
      //save token and navigate to other component
      localStorage.setItem("token",json.authToken);
      navigate("/");
      showAlert("Successfly Login to Home page", "success")
    } else {
      showAlert("Invalid Credentials", "danger");
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleOnClick}>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email || ""}
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={onChange}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={credentials.password || ""}
            name="password"
            placeholder="Password"
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
