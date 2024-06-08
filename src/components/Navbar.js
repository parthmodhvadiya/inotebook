import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const location = useLocation();
  let navigate = useNavigate();
  const handleLogout = ()=>
    {
      localStorage.removeItem('token');
      navigate('/login');
      props.showAlert("You have logout from your iNotebook", "success");
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
          </form>:<button 
          onClick={handleLogout}
              className="btn btn-primary mx-1" 
              to="/signup">LogOUt</button>
              
}      <ul className="navbar-nav">
        <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Profile {/* <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" className="rounded-circle"> */}
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link className="dropdown-item" href="#">Dashboard</Link>
          <Link className="dropdown-item" href="#">Edit Profile</Link>
          <Link className="dropdown-item" href="#">Log Out</Link>
        </div>
      </li>   
    </ul>  
 </div>
      </div>

    </nav>
  );
};

export default Navbar;
