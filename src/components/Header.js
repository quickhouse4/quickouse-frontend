import { Link, useHistory, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { allData, propertyForRent, propertyForSale } from "../actions/propertiesAction";
import "./header.css";
import {
  apartmentsFilter,
  apartmentsFilterSale,
  vacantPlotFilter,
  vacantPlotFilterSale,
  warehouseFilter,
  warehouseFiltersale,
  commercialFilter,
  commercialFilterSale,
  residentialsFilter,
  residentialsFilterSale,
  officesFilter,
  officesFilterSale,
} from "../actions/propertiesFilterAction";
import { RENT_CATEGORY, SELL_CATEGORY, SEARCH_CATEGORY, FOR_RENT, FOR_SALE } from "../actions/types";
import logo from "./images/HouseLine.png"

function Header({ setLabel }) {
  const location = useLocation();
  const [isMenuToggled, setIsMenuToggled] = useState(true)
  const [toggle, setToggle] = useState(false)
  const [menuToggle, setMenuToggle] = useState(false)
  const [menuToggle1, setMenuToggle1] = useState(false)
  const [menuToggle2, setMenuToggle2] = useState(false)
  const [menuToggle3, setMenuToggle3] = useState(false)
  const [menuToggle4, setMenuToggle4] = useState(false)
  const [menuToggle5, setMenuToggle5] = useState(false)
  const [activeLink, setActiveLink] = useState('');

  const history = useHistory();
  let pageLimit = 25;
  let pageCount = 1;

  const dispatch = useDispatch();

  let token = localStorage.getItem("token");

  const [keyword, setKeyword] = useState("");

  const [profile, setProfile] = useState([]);
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navbar2 = isTopOfPage ? "" : "shadow"

  function handleLogout() {
    localStorage.removeItem("token");
    history.push("/");
    window.location.reload();
  }

  function handleForRent() {
    setActiveLink('For Rent')
    dispatch({ type: FOR_RENT });
    dispatch(propertyForRent(pageCount, pageLimit))
    setLabel("propertiesForRent")
  }

  function handleForSale() {
    setActiveLink('For Sale');
    dispatch({ type: FOR_SALE });
    dispatch(propertyForSale(pageCount, pageLimit))
    setLabel("propertiesForSale")
  }

  function handleApartmentForRent() {
    dispatch({ type: RENT_CATEGORY });
    dispatch(apartmentsFilter());
    setLabel("apartmentsFilters")

  }

  function handleApartmentForSale() {
    dispatch({ type: SELL_CATEGORY });
    dispatch(apartmentsFilterSale());

    setLabel("apartmentsSaleFilters")

  }

  function handleWarehouseForRent() {
    dispatch({ type: RENT_CATEGORY });
    dispatch(warehouseFilter());

    setLabel("warehouseFilters")

  }

  function handleWarehouseForSale() {
    dispatch({ type: SELL_CATEGORY });
    dispatch(warehouseFiltersale());

    setLabel("warehouseSaleFilters")


  }
  function handlePlotForRent() {
    dispatch({ type: RENT_CATEGORY });
    dispatch(vacantPlotFilter());

    setLabel("vacantPlotsFilters")

  }
  function handlePlotForSale() {
    dispatch({ type: SELL_CATEGORY });
    dispatch(vacantPlotFilterSale());

    setLabel("vacantPlotsSaleFilters")

  }

  function handleOfficeForRent() {
    dispatch({ type: RENT_CATEGORY });
    dispatch(officesFilter());

    setLabel("officesFilters")

  }

  function handleOfficeForSale() {
    dispatch({ type: SELL_CATEGORY });
    dispatch(officesFilterSale());

    setLabel("officesSaleFilters")

  }

  function handleCommercialForRent() {
    dispatch({ type: RENT_CATEGORY });
    dispatch(commercialFilter());

    setLabel("commercialFilters")

  }

  function handleCommercialForSale() {
    dispatch({ type: SELL_CATEGORY });
    dispatch(commercialFilterSale());

    setLabel("commercialSaleFilters")

  }

  function handleResidentialForRent() {
    dispatch({ type: RENT_CATEGORY });
    dispatch(residentialsFilter());

    setLabel("residentialsFilters")

  }

  function handleResidentialForSale() {
    dispatch({ type: SELL_CATEGORY });
    dispatch(residentialsFilterSale());

    setLabel("residentialsSaleFilters")

  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword || e.key === "Enter") {
      dispatch({ type: SEARCH_CATEGORY });
      dispatch(allData(keyword));

    }
  };
  const handlePropert = async (e) => {
    e.preventDefault();
    if (!token) {
      setTimeout(() => {
        history.push("/login")
      }, 6000);
      toast.warn("You have to be Loggedin")
    }
  }

  useEffect(() => {
    async function fetchProfile() {
      try {
        if (!token) {
          console.log(".");
          return;
        }
        const { data } = await axios.get(
          `http://197.243.26.162/api/myProfile`,
          {
            headers: {
              token: token,
            },
          }
        );

        setProfile(data.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    }

    fetchProfile();
  }, [token]);


  useEffect(() => {
    const pathname = location.pathname;

    if (pathname === "/type/propertiesForRent") {
      setActiveLink("For Rent");
    } else if (pathname === "/type/propertiesForSale") {
      setActiveLink("For Sale");
    } else if (pathname === "/Deal") {
      setActiveLink("Order");
    } else if (pathname === "/allRequest") {
      setActiveLink("Requested");
    } else if (pathname === "/login") {
      setActiveLink("Login")
    } else if (pathname === "/aboutUs") {
      setActiveLink("AboutUs")
    } else {
      setActiveLink("");
    }
  }, [location.pathname]);


  return (
    <header id="header" className={`${navbar2} header fixed-top`}>
      <div className="container-fluid d-flex  justify-content-between">
        <div id="logo" className="d-flex align-items-center">
          <h3>
            <Link
              className={`logo ${activeLink === 'QuickHouse' ? 'active-link' : ''}`}
              to="/"
              style={{ fontWeight: "600" }}

            >
              {/* <img src={logo} width="150px" height="120px"/> */}
              QUiCKHOUSE
            </Link>
          </h3>
          {/* <div className="ml-5">
            <Link className="messageIcon" to={`/chat/${userid}`}>
              <AiFillMessage style={{ color: "#010a14", fontSize: "2rem", fontWeight:"bold" }} />
            </Link>
            <div className="messaging">
              <li><Link to={`/chat/${userid}`} style={{color: "#010a14", fontSize: "1.5rem" ,fontWeight:"bold"}}>Messaging</Link></li>
            </div>
          </div> */}
        </div>

        <nav id="navbar" className={isMenuToggled ? 'navbar' : "navbar-mobile"}>
          <ul>
            <form onSubmit={submitHandler} className="col-md-3">
              <div className="d-flex rounded-pill">
                <input
                  type="text"
                  className="form-control container"
                  placeholder="type keyword"
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <button style={{ width: "30%" }} className="btn col-md-2 text-light p-1 button-bg" type="submit">
                  <span className="text-light fs-6">Go</span>
                </button>
              </div>
            </form>
            <li className="dropdown">
              <a className="button-bg buton" style={{ marginLeft: "20px", padding: "8px", borderRadius: "5px" }} onClick={() => setToggle(!toggle)} >
                <span className="text-light fs-6">All Category<i className="bi bi-chevron-down text-light"></i></span>
              </a>
              <ul className={!toggle ? "dropdown" : "dropdown-active d-flex flex-column"}>
                <li className="dropdown"><a onClick={() => setMenuToggle(!menuToggle)}><Link to="">Warehouse</Link><i className="bi bi-chevron-right"></i></a>
                  <ul className={!menuToggle ? "" : "dropdown-active"}>
                    <li><Link to="/type/warehouseFilters" onClick={handleWarehouseForRent}>For Rent</Link></li>
                    <li><Link to="/type/warehouseSaleFilters" onClick={handleWarehouseForSale}> For Sale</Link></li>
                  </ul>
                </li>
                <li className="dropdown"><a onClick={() => setMenuToggle1(!menuToggle1)}>
                  <Link to="">Apartments</Link><i className="bi bi-chevron-right"></i></a>
                  <ul className={!menuToggle1 ? "" : "dropdown-active"}>
                    <li><Link to="/type/apartmentsFilters" onClick={handleApartmentForRent}>For Rent</Link></li>
                    <li><Link to="/type/apartmentsSaleFilters" onClick={handleApartmentForSale}> For Sale</Link></li>
                  </ul>
                </li>
                <li className="dropdown"><a onClick={() => setMenuToggle2(!menuToggle2)}>
                  <Link to="">Vacant Plot</Link><i className="bi bi-chevron-right"></i></a>
                  <ul className={!menuToggle2 ? "" : "dropdown-active"}>
                    {/* <li><Link to="/type/vacantPlotsFilters" onClick={handlePlotForRent} >For Rent</Link></li> */}
                    <li><Link to="/type/vacantPlotsSaleFilters" onClick={handlePlotForSale}> For Sale</Link></li>
                  </ul>
                </li>
                <li className="dropdown"><a onClick={() => setMenuToggle3(!menuToggle3)}>
                  <Link to="">Office</Link><i className="bi bi-chevron-right"></i></a>
                  <ul className={!menuToggle3 ? "" : "dropdown-active"}>
                    <li><Link to="/type/officesFilters" onClick={handleOfficeForRent}>For Rent</Link></li>
                    <li><Link to="/type/officesSaleFilters" onClick={handleOfficeForSale}> For Sale</Link></li>
                  </ul>
                </li>
                <li className="dropdown"><a onClick={() => setMenuToggle4(!menuToggle4)}>
                  <Link to="">Residentials</Link><i className="bi bi-chevron-right"></i></a>
                  <ul className={!menuToggle4 ? "" : "dropdown-active"}>
                    <li><Link to="/type/residentialsFilters" onClick={handleResidentialForRent}>For Rent</Link></li>
                    <li><Link to="/type/residentialsSaleFilters" onClick={handleResidentialForSale}> For Sale</Link></li>
                  </ul>
                </li>
                <li className="dropdown"><a onClick={() => setMenuToggle5(!menuToggle5)}>
                  <Link to="">Commercial</Link><i className="bi bi-chevron-right"></i></a>
                  <ul className={!menuToggle5 ? "" : "dropdown-active"}>
                    <li><Link to="/type/commercialFilters" onClick={handleCommercialForRent}>For Rent</Link></li>
                    <li><Link to="/type/commercialSaleFilters" onClick={handleCommercialForSale}> For Sale</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a className={`nav-link scrollto ${activeLink === 'For Rent' ? 'active-link' : ''}`}>
                <Link to="/type/propertiesForRent" onClick={handleForRent} >For Rent</Link>
              </a>
            </li>
            <li>
              <a className={`nav-link scrollto ${activeLink === 'For Sale' ? 'active-link' : ''}`}>
                <Link to="/type/propertiesForSale" onClick={handleForSale} >For Sale</Link>
              </a>
            </li>
            {!token ?
              (
                <>
                  <li>
                    <a className="nav-link scrollto">
                      <Link className="nav-link" onClick={handlePropert} data-toggle="modal">List Your propperty</Link>
                    </a>
                  </li>
                  <li>
                    <a className={`nav-link scrollto`}>
                      <Link to="/Deal" onClick={(e) => { setActiveLink('Order'); handlePropert(e); }}>Order</Link>
                    </a>
                  </li>
                </>
              )
              :
              (
                <>
                  <li>
                    <a className="nav-link scrollto">
                      <Link to="" className="nav-link" data-toggle="modal" data-target="#exampleModalScrollable" >List Your propperty</Link>
                    </a>
                  </li>
                  <li>
                    <a className={`nav-link scrollto ${activeLink === 'Order' ? 'active-link' : ''}`}>
                      <Link to="/Deal" onClick={() => { setActiveLink('Order') }}>Order</Link>
                    </a>
                  </li>
                </>
              )
            }
            {/* <li>
              <a className={`nav-link scrollto ${activeLink === 'Requested' ? 'active-link' : ''}`}>
                <Link to="/allRequest" onClick={() => { setActiveLink('Requested') }} >Requested</Link>
              </a>
            </li> */}
            {/* <li>
              <a className={`nav-link scrollto ${activeLink === 'AboutUs' ? 'active-link' : ''}`}>
                <Link to="/aboutUs" onClick={() => { setActiveLink('AboutUs') }} >About Us</Link>
              </a>
            </li> */}
            <li className={isMenuToggled ? "d-none justify-content-end" : ""}><a className="nav-link scrollto"><Link to="/quickDeals">QuickDeals</Link></a></li>
            {token ? <li className={isMenuToggled ? "d-none justify-content-end" : ""}><a className="nav-link scrollto"><Link to="/dashboard">Dashboard</Link></a></li> : ""}
            {!token ? (
              <>
                {/* <li><a className="nav-link scrollto"><Link to="/register" >AllRequest</Link></a></li> */}
                <li>
                  <a className={`nav-link scrollto ${activeLink === 'Login' ? 'active-link' : ''}`}>
                    <Link to="/login" onClick={() => { setActiveLink('Login') }}> Login</Link>
                  </a>
                </li>
              </>
            ) : (
              <div className="dropdown">
                <button className="dropbtn" style={{ marginLeft: "5px", borderRadius: "50%" }}>
                  {profile.profilePhotoUrl ? (
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle"
                        src={profile.profilePhotoUrl}
                        style={{
                          width: "40px",
                          height: "40px",
                        }}
                      />
                      <i className="bi bi-chevron-down" style={{ fontSize: "20px", fontWeight: "bold", color: "#010a14" }}></i>
                    </div>
                  ) : (
                    <i
                      className="bi bi-person-circle"
                      style={{
                        fontSize: "2rem",
                      }}
                    ></i>
                  )}
                </button>
                <div className="dropdown-content" >
                  <Link to="/profile">Profile</Link>
                  <Link to="/dashboard">Dashboard</Link>
                  <Link to="" className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              </div>

            )}
          </ul>
          <i onClick={() => setIsMenuToggled(!isMenuToggled)} id='sdbartog' className={isMenuToggled ? 'bi bi-list mobile-nav-toggle ' : 'bi mobile-nav-toggle bi-x text-light'}></i>
        </nav>

      </div>
    </header>

  );
}

export default Header;
