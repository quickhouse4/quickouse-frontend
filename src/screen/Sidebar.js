import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { MdDashboard, MdLibraryAdd, MdToc, MdOutlineMessage } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
import { AiFillUnlock } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { FcHome } from "react-icons/fc";
import { FaUsers } from "react-icons/fa"
import { GrTransaction } from "react-icons/gr";



const Sidebar = () => {

  let token = localStorage.getItem("token");
  const location = useLocation()
  const [activeLink, setActiveLink] = useState('');
  const userToken = JSON.parse(atob(token.split('.')[1]));

  const history = useHistory()

  function handleLogout() {
    localStorage.removeItem("token");
    history.push("/");
    window.location.reload();
  }

  useEffect(() => {
    const pathname = location.pathname;

    if (pathname === "/dashboard") {
      setActiveLink("dashboard");
    } else if (pathname === "/createproperty") {
      setActiveLink("createproperty");
    } else if (pathname === "/createSpecialProperty") {
      setActiveLink("createSpecialProperty");
    } else if (pathname === "/allUser") {
      setActiveLink("allUser");
    }else if(pathname === "/transactions"){
      setActiveLink("transactions")
    }else if (pathname === "/myDeals") {
      setActiveLink("myDeals")
    } else if (pathname === "/aboutUs") {
      setActiveLink("AboutUs")
    } else {
      setActiveLink("");
    }
  }, [location.pathname]);

  return (
    <>
      <div className="col-auto min-vh-100 pl-0" style={{ marginTop: "120px" }}>
        <div class="col-auto col-md-12 h-100 min-vh-100 sidebar-bg col-xl-12 px-sm-2 px-0 bg-dark">
          <div class="d-flex flex-column min-vh-100 align-items-center align-items-sm-start px-2 pt-2 text-white min-vh-100">
            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              <Link to="/" class="nav-item nav-link align-middle px-0">

                <FcHome style={{ color: "#fff", fontSize: "1.4rem" }} /> <span class="ms-1 d-none d-sm-inline">Home</span>

              </Link>

              <Link to="/dashboard" class={`nav-item nav-link align-middle px-0 ${activeLink === "dashboard" ? "active-link1" : ""}`}>

                <MdDashboard style={{ color: "#fff", fontSize: "1.4rem" }} /> <span class="ms-1 d-none d-sm-inline">Dashboard</span>

              </Link>

              <Link to="/createproperty" class={`nav-item nav-link align-middle px-0 ${activeLink === "createproperty" ? "active-link1" : ""}`}>

                <MdLibraryAdd style={{ color: "#fff", fontSize: "1.4rem" }} /> <span class="ms-1 d-none d-sm-inline">Post property</span>

              </Link>
              {userToken.role === "admin" &&
                <>
                  <Link to="/createSpecialProperty" class={`nav-item nav-link align-middle px-0 ${activeLink === "createSpecialProperty" ? "active-link1" : ""}`}>

                    <MdLibraryAdd style={{ color: "#fff", fontSize: "1.4rem" }} /> <span class="ms-1 d-none d-sm-inline">Post special property</span>

                  </Link>

                  <Link to="/allUser" class={`nav-item nav-link align-middle px-0 ${activeLink === "allUser" ? "active-link1" : ""}`}>

                    <FaUsers style={{ color: "#fff", fontSize: "1.4rem" }} /> <span class="ms-1 d-none d-sm-inline">All Users</span>

                  </Link>
                  <Link to="/transactions" class={`nav-item nav-link align-middle px-0 ${activeLink === "transactions" ? "active-link1" : ""}`}>

                    <GrTransaction style={{ color: "#fff", fontSize: "1.4rem" }} /> <span class="ms-1 d-none d-sm-inline">Transactions</span>

                  </Link>
                </>
              }

              <Link to="/myDeals" class={`nav-item nav-link align-middle px-0 ${activeLink === "myDeals" ? "active-link1" : ""}`}>

                <MdToc style={{ color: "#fff", fontSize: "1.4rem" }} /> <span class="ms-1 d-none d-sm-inline">My Dealer</span>

              </Link>

              <Link to="/dashboard" class="nav-item nav-link align-middle px-0">

                <MdToc style={{ color: "#fff", fontSize: "1.4rem" }} /> <span class="ms-1 d-none d-sm-inline">My Listing</span>

              </Link>
              <Link to="/messages" class="nav-item nav-link align-middle px-0">

                <MdOutlineMessage style={{ color: "#fff", fontSize: "1.4rem" }} /> <span class="ms-1 d-none d-sm-inline">Messages</span>

              </Link>
              <Link to="/dashboard" class="nav-item nav-link align-middle px-0">

                <FcStatistics style={{ color: "#fff", fontSize: "1.4rem" }} /> <span class="ms-1 d-none d-sm-inline">Statistics</span>

              </Link>
              <Link to="/" class="nav-item nav-link align-middle px-0">

                <AiFillUnlock style={{ color: "#fff", fontSize: "1.4rem" }} /> <span class="ms-1 d-none d-sm-inline">Change password</span>

              </Link>
              <Link to="" onClick={handleLogout} class="nav-item nav-link align-middle px-0">

                <BiExit style={{ color: "#fff", fontSize: "1.4rem" }} /> <span class="ms-1 d-none d-sm-inline">Logout</span>

              </Link>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
};

export default Sidebar;
