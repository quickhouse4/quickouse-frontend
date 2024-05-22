import React from "react";
import { ToastContainer, toast } from "react-toastify";
import PostModel from "../screen/PostModel";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { propertyForRent, propertyForSale } from "../actions/propertiesAction";
import { FOR_RENT, FOR_SALE } from "../actions/types";

function Footer() {
  let token = localStorage.getItem("token");
  let pageLimit = 25;
  let pageCount = 1;
  const history = useHistory()
  const dispatch = useDispatch()

  const handlePropert = async (e) => {
    e.preventDefault();
    if (!token) {
      setTimeout(() => {
        history.push("/login")
      }, 6000);
      toast.warn("You have to be Loggedin")
    }
  }
  function handleForRent() {
    dispatch({ type: FOR_RENT });
    dispatch(propertyForRent(pageCount, pageLimit))
    // setLabel("propertiesForRent")
  }

  function handleForSale() {
    dispatch({ type: FOR_SALE });
    dispatch(propertyForSale())
    // setLabel("propertiesForSale")
  }
  return (
    <footer class="footer d-flex flex-column align-items-center">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div class="container-fluid ">
        <div class="row justify-content-center">
          <div class="col-sm-12 col-md-6 col-lg-3" style={{ marginRight: "100px", marginLeft: "100px" }}>
            <div class="list-menu">
              <h4>Our Services</h4>
              <ul class="list-unstyled">
                <li><a href="#" className="text-light">Property Management</a></li>
                <li><a href="#" className="text-light">Real Estate Feasibility studies</a></li>
                <li><a href="#" className="text-light">Real Estate Investimate Advisory Services</a></li>
                <li><a href="#" className="text-light">Real Estate Brokerage / Agency (Letting; Sales)</a></li>
              </ul>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="list-menu">
              <h4>QuickLinks</h4>
              <ul class="list-unstyled">
                <li>
                  <a>
                    <Link className="text-light" to="/type/propertiesForRent" onClick={handleForRent} >For Rent</Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link className="text-light" to="/type/propertiesForSale" onClick={handleForSale} >For Sale</Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link className="text-light" to="/Deal" onClick={handlePropert}>Order</Link>
                  </a>
                </li>
                {/* <li>
                  <a>
                    <Link to="/allRequest" className="text-light" >Requested</Link>
                  </a>
                </li> */}
                <li>
                  <a>
                    <Link className="text-light" to="/aboutUs">About Us</Link>
                  </a>
                </li>
              </ul>

            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="list-menu">
              <h4>Contact Us</h4>
              <ul class="list-unstyled">
                <li class="d-flex align-items-center">
                  <i class="bi bi-envelope" style={{ color: "white" }}></i>
                  <a href="mailto:towerpropertyconsultancy@gmail.com" className="text-light">
                    towerpropertyconsultancy@gmail.com
                  </a>
                </li>
                <li class="d-flex align-items-center">
                  <i class="bi bi-phone" style={{ color: "white" }}></i>
                  <a href="tel: +250 788 474 844 / +250 789 365 264" className="text-light">
                    +250 788 474 844 / +250 789 365 264
                  </a>
                </li>
                <li class="d-flex align-items-center">
                  <i class="bi bi-geo-alt" style={{ color: "white" }}></i>
                  <a href="https://www.google.com/maps/place/Tower+Property+Consultancy+ltd./@-1.9483283,30.1221728,17z/data=!3m1!4b1!4m6!3m5!1s0x19dca7feb947484b:0x3411407dd5f860b4!8m2!3d-1.9483337!4d30.1267862!16s%2Fg%2F11flmnpy6h?entry=ttu" className="text-light">
                    Kimironko , Golden Plaza, 2nd Floor; No 03
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-auto">
        <div class="container">
          <div class="credits">
            <a >&copy; Copyrights QuickHouse {new Date().getFullYear()}. All rights reserved.</a>
          </div>
        </div>
      </div>
      {/* -------------Register Form------------------- */}
      <PostModel />
    </footer>



  );
}

export default Footer;
