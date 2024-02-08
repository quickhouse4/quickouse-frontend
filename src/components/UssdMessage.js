import React, { useState, useEffect } from "react";
import "./ussd.css"
import { useDispatch, useSelector } from "react-redux";
import {
  getClientUssd,
  requestFilter,
  offersFilter,
  offersSaleFilter,
  requestSaleFilter
} from "../actions/ussdAction";
import { formatPrice } from "../priceFormated";
import { Link } from "react-router-dom";
import Header from "./Header"
import { USSD_RENT_CATEGORY, USSD_SELL_CATEGORY } from "../actions/types";
import Spinner from "react-bootstrap/Spinner";


const UssdMessage = () => {
  let commonLoading = ''
  let allError = "";
  const { ussdLoading, ussd, ussdError } = useSelector((state) => state.getUssdMessage)
  const { offerLoading, offerFilters, offerError } = useSelector((state) => state.offerFilter);
  const { offerSaleLoading, offerSaleFilters, offerSaleError } = useSelector((state) => state.offerFilterSale);

  const { requestLoading, requestFilters, requestError } = useSelector((state) => state.requestFilter)
  const { requestSaleLoading, requestSaleFilters, requestSaleError } = useSelector((state) => state.requestFilterSale)

  const [loading, setLoading] = useState(false);


  const dispatch = useDispatch()
  const [toggle, setToggle] = useState(false)
  const [menuToggle, setMenuToggle] = useState(false)
  const [menuToggle1, setMenuToggle1] = useState(false)
  const [label, setLabel] = useState()

  let pageLimit = 25;
  let pageCount = 1;
  let allUssd = ussd
  commonLoading = ussdLoading
  allError = ussdError

  useEffect(() => {
    dispatch(getClientUssd())
  }, [])

  function capitalizeFirstLetter(string) {
    if (string === undefined) {
      return "";
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function handleOfferForRent() {
    setLoading(true);
    dispatch({ type: USSD_RENT_CATEGORY });

    dispatch(offersFilter(pageCount, pageLimit))
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
    setLabel("offersFilters")
  }

  function handleOfferForSale() {
    setLoading(true);
    dispatch({ type: USSD_SELL_CATEGORY });

    dispatch(offersSaleFilter(pageCount, pageLimit))
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
    setLabel("offersSaleFilters")

  }

  function handleRequestForRent() {
    setLoading(true);
    dispatch({ type: USSD_RENT_CATEGORY });
    dispatch(requestFilter(pageCount, pageLimit))
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
    setLabel("requestFilters")
  }
  function handleRequestForSale() {
    setLoading(true);
    dispatch({ type: USSD_SELL_CATEGORY });
    dispatch(requestSaleFilter(pageCount, pageLimit))
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
    setLabel("requestSaleFilters")
  }

  switch (label) {
    case 'offersFilters':

      allUssd = offerFilters
      allError = offerError

      break;
    case 'offersSaleFilters':
      allUssd = offerSaleFilters;
      allError = offerSaleError


      break;

    case 'requestFilters':
      allUssd = requestFilters;
      allError = requestError
      break;

    case 'requestSaleFilters':
      allUssd = requestSaleFilters;
      allError = requestSaleError
      break;

    default:
      allUssd = allUssd
  }

  const getOptionsDisplayText = (options) => {
    switch (options) {
      case "Nkeneye kugura":
        return "Nkeneye kugura";
      case "Ndagurisha":
        return "Ndagurisha";
      case "Ndakodesha(Tenant)":
        return "Ndakodesha (Tenant)";
      case "Ndakodesha(Landlord)":
        return "Ndakodesha (Landlord)";
      default:
        return options;
    }
  };
  return (
    <>
      <Header setLabel={setLabel} />
      <div
        id="deal"
        class="col-md-3 pt-2 d-md-block container-fluid message-list top-ussd"
      >
        {allUssd && allUssd.length === 0 ? (
          <span style={{ color: "#071c36" }} className="fs-3 mt-5 text-center d-flex justify-content-center">
            Service Launching Soon!
          </span>
        ) :
          <div className='navbar1 d-flex justify-content-center align-items-center'>
            <ul >
              <li className="dropdown1">
                <a className="" onClick={() => setToggle(!toggle)} >
                  <h4 className="text-center fs-3" style={{ fontWeight: "600" }}>SMS</h4>
                </a>
                {/*<i className="bi bi-chevron-down "></i> <ul className={!toggle ? "dropdown1" : "dropdown1-active d-flex flex-column"}>
                  <li className="dropdown1"><a onClick={() => setMenuToggle(!menuToggle)}><Link>Offer</Link><i className="bi bi-chevron-right"></i></a>
                    <ul className={!menuToggle ? "" : "dropdown1-active"}>
                      <li>
                        <Link to="/type/offersFilters" onClick={handleOfferForRent}>
                          For Rent
                        </Link>
                      </li>
                      <li>
                        <Link to="/type/offersSaleFilters" onClick={handleOfferForSale} >
                          For Sale
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown1"><a onClick={() => setMenuToggle1(!menuToggle1)}>
                    <Link >Requests</Link><i className="bi bi-chevron-right"></i></a>
                    <ul className={!menuToggle1 ? "" : "dropdown1-active"}>
                      <li>
                        <Link to="/type/requestFilters" onClick={handleRequestForRent}>
                          For Rent
                        </Link>
                      </li>
                      <li>
                        <Link to="/type/requestSaleFilters" onClick={handleRequestForSale}>
                          For Sale
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul> */}
              </li>
            </ul>
          </div>
        }
        <div class="common">
          {
            loading ? (
              <h2 class="text-center mt-5 pt-5">
                {" "}
                <Spinner
                  animation="border"
                  variant="dak"
                  class="text-center mt-5 pt-5"
                />
              </h2>
            ) : (
              <>
                {" "}
                {

                  !allUssd ? (
                    <span className="text-danger text-center">
                      no data available for this choice
                    </span>
                  ) :
                    allUssd && allUssd.map((item, index) => (
                      <Link to="" class="text-decoration-none ">
                        <div
                          class="card mb-1 rounded-lg ussd-card"
                          key={index}
                        >
                          <div class="card-body shadow-lg bg-light rounded border border-light ">
                            <div class="card-text d-flex justify-content-between">
                              <div>
                                <div className="sms-style">
                                  <span className="sms-title">Options:</span>
                                  {" "}
                                  <span className="sms-text">{getOptionsDisplayText(capitalizeFirstLetter(item.Options))}</span>
                                </div>
                                <div className="sms-style">
                                  <span className="sms-title">Type:</span>
                                  {" "}
                                  <span className="sms-text">{capitalizeFirstLetter(item.Type)}</span>
                                </div>
                                <div className="sms-style">
                                  <span className="sms-title">Price:</span>
                                  {" "}
                                  <span className="sms-text">{formatPrice(item.price)} rwf</span>
                                </div>
                                <div className="sms-style">
                                  <span className="sms-title">Province:</span>
                                  {" "}
                                  <span className="sms-text">{item.province}</span>
                                </div>
                              </div>
                              <div>
                                <div className="sms-style">
                                  <span className="sms-title">District:</span>
                                  {" "}
                                  <span className="sms-text">{item.district}</span>
                                </div>
                                <div className="sms-style">
                                  <span className="sms-title">Sector:</span>
                                  {" "}
                                  <span className="sms-text">{item.sector}</span>
                                </div>
                                <div className="sms-style">
                                  <span className="sms-title">Phone:</span>
                                  {" "}
                                  <span className="sms-text"><a href={`${item.phone}`}>{item.phone}</a></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))
                }
                </>
            )}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default UssdMessage;
