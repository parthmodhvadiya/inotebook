import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = (props) => {
    const [signupCre, setsignupCre] = useState({email:"",password:"",name:""})
    let navigate = useNavigate();
    const onChange =(e)=>
        {
            setsignupCre({...signupCre,[e.target.name]:e.target.value});
        }
    const handleOnClick = async (e)=>
        {
            e.preventDefault();
            const response = await fetch("http://localhost:8000/api/auth/createuser",{
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email: signupCre.email,password:signupCre.password,name:signupCre.name})
            })
            const json = await response.json();
            if(json.sucess)
                {
                    localStorage.setItem('token',json.authToken)
                    navigate("/");   
                    props.showAlert("Successfly Login to Home page", "success")
                }
            else
            {
                props.showAlert("Invalid Details", "danger");
            }
        }
    return (
    <div className="container">
      <form onSubmit={handleOnClick}>
        <div className="form-group mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="name"
            className="form-control"
            id="name"
            name="name"
            value={signupCre.name}
            placeholder="Enter Your Name"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={signupCre.email}
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={onChange}
            minLength={5}
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={signupCre.password}
            placeholder="Password"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
