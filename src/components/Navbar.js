import React,{useContext} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../context/notes/NoteState";

const Navbar = (props) => {
  const location = useLocation();
  let navigate = useNavigate();
  const {user,getUser} = useContext(UserContext);
  const handleLogout = ()=>
    {
      localStorage.removeItem('token');
      navigate('/login');
      props.showAlert("You have logout from your iNotebook", "success");
    }
    const handleGetUser = ()=>
      {
        getUser();
      }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          iNotebook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem('token') ? <form className="d-flex">
            <Link
              to="/login"
              className="btn btn-primary mx-1 active"
              role="button"
              aria-pressed="true"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="btn btn-primary mx-1"
              role="button"
              aria-pressed="true"
            >
              Signup
            </Link>
          </form>:
          <li className="dropdown">
          <button className="btn btn-primary mx-1 dropdown-toggle" onClick={handleGetUser} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Profile
          </button>
          <ul className="dropdown-menu mr-5" style={{marginRight: "120px"}} aria-labelledby="navbarDropdownMenuLink">
          <Link className="dropdown-item" href="#">Username : {user.name}</Link>
          <Link className="dropdown-item" href="#">Email : {user.email}</Link>
          <button className="btn btn-primary dropdown-item" href="#"
          onClick={handleLogout}>Log Out</button> 
          </ul>
        </li>
              
}
    
 </div>
      </div>

    </nav>
  );
};

export default Navbar;
