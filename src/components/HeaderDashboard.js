import React from "react";
import {
  FaBeer,
  FaGooglePlusSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";

let email = localStorage.getItem("email");


const HeaderDashboard = () => {

  const history = useHistory();

  function handleLogout() {
    localStorage.removeItem("token");
    history.push('/')
  }

  return (
    <nav class="navbar navbar-expand-lg navbar-light nav-back" style={{marginTop:"120px"}}>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <ul
        class="navbar-nav"
        style={{
          marginLeft: "30rem",
        }}
      >
        <li class="nav-item">
          <a class="nav-link" href="#" data-toggle="modal" data-target="#login">
            <FaGooglePlusSquare style={{ color: "#fff", fontSize: "1.4rem" }} />
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href=""
            data-toggle="modal"
            data-target="#register"
          >
            <FaTwitterSquare style={{ color: "#fff", fontSize: "1.4rem" }} />
          </a>
        </li>

        <li class="nav-item">
          <a
            class="nav-link"
            href=""
            data-toggle="modal"
            data-target="#register"
          >
            <FaLinkedin style={{ color: "#fff", fontSize: "1.4rem" }} />
          </a>
        </li>
      </ul>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <FaBeer />
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <div class="dropdown show">
              <Link
                class="btn btn-secondary dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {email}            
              </Link>

              <div class="dropdown-menu">
                <Link class="dropdown-item" to="/profile">
                  Profile
                </Link>
                <Link class="dropdown-item" onClick={handleLogout}>
                  Logout
                </Link>

              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderDashboard;
