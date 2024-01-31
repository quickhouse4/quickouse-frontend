import React, { useState, useEffect } from "react";
import "./ussd.css"
import { useDispatch, useSelector } from "react-redux";
import {
  getAppMessage
} from "../actions/ussdAction";
import { formatPrice } from "../priceFormated";
import { Link } from "react-router-dom";
import Header from "./Header"
import Spinner from "react-bootstrap/Spinner";


const AppMessage = () => {

  const { appMessageLoading, appMessage, appMessageError } = useSelector((state) => state.appReducer)

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAppMessage())
  }, [])
  const [label, setLabel] = useState()

  function capitalizeFirstLetter(string) {
    if (string === undefined) {
      return "";
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <>
      <Header setLabel={setLabel} />
      <div class="col-md-3 property-col prime-list top">
        <div class="common">
          <div className='d-flex justify-content-center'>
            <h4 class="fs-3" style={{ fontWeight: "500" }}>APP MESSAGES</h4>
          </div>
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

                  !appMessage ? (
                    <span className="text-danger text-center">
                      no data available for this choice
                    </span>
                  ) :
                    appMessage && appMessage.map((item, index) => (
                      <Link to={`/detailsMessage/${item._id}`} class="text-decoration-none ">
                        <div
                          class="card mb-1 rounded-lg ussd-card"
                          key={index}
                        >
                          <div class="card-body shadow-lg bg-light rounded border border-light ">
                            <div class="card-text d-flex ">
                              <div>
                                <div className="sms-style">
                                  <span className= "sms-title" >Type:</span>
                                  {" "}
                                  <span className="sms-text">{capitalizeFirstLetter(item.type)}</span>
                                </div>
                                <div className="sms-style">
                                  <span className= "sms-title">Status:</span>
                                  {" "}
                                  <span className="sms-text">{capitalizeFirstLetter(item.businessStatus)}</span>
                                </div>

                                <div className="sms-style">
                                  <span className= "sms-title">Price:</span>
                                  {" "}
                                  <span className="sms-text">{formatPrice(item.price)} {item.currency}</span>
                                </div>
                              </div>
                              <div className="pl-2">
                                <div className="sms-style">
                                  <span className= "sms-title">Location:</span>
                                  {" "}
                                  <span className="sms-text">{item.province}{" "}{item.district}{" "}{item.sector}</span>
                                </div>
                                <div className="sms-style">
                                  <span className= "sms-title">Phone:</span>
                                  {" "}
                                  <span className="sms-text"><a href={`0${item.postedBy && item.postedBy.phoneNumber}`}>0{item.postedBy && item.postedBy.phoneNumber}</a></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))
                }</>
            )}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default AppMessage;
