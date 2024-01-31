import React, { useState, useEffect } from "react";
import { getDeals } from "../actions/dealAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Footer from "./Footer";
import { formatPrice } from "../priceFormated";
import { getAppMessage } from "../actions/ussdAction";

const Deal = () => {

    // const deals = useSelector((state) => state.dealList)
    // const { deal, loading } = deals
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getDeals())
    // }, [])

    const { appMessageLoading, appMessage, appMessageError } = useSelector((state) => state.appReducer)

    const [loading, setLoading] = useState(false);


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAppMessage())
    }, [])
    function capitalizeFirstLetter(string) {
        if (string === undefined) {
            return "";
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <>


<div class="col-md-3 property-col prime-list top">
<div class="common">
<div className='d-flex justify-content-center mt-5'>
    <h4 class="fs-3" style={{fontWeight:"500"}}>App Message</h4>
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
          <Link  class="text-decoration-none ">
            <div
              class="card mb-1 rounded-lg ussd-card"
              key={index}
            >
              <div class="card-body shadow-lg bg-light rounded border border-light ">
                <div class="card-text d-flex ">
                  <div>
                  <div className="sms-style">
                      <span>Title:</span>
                      {" "}
                      <span>{capitalizeFirstLetter(item.title)}</span>
                    </div>
                    <div className="sms-style">
                      <span>businessStatus:</span>
                      {" "}
                      <span>{capitalizeFirstLetter(item.businessStatus)}</span>
                    </div>
                    <div className="sms-style">
                      <span>Type:</span>
                      {" "}
                      <span>{capitalizeFirstLetter(item.type)}</span>
                    </div>
                    <div className="sms-style">
                      <span>Price:</span>
                      {" "}
                      <span>{formatPrice(item.price)} {item.currency}</span>
                    </div>
                    <div className="sms-style">
                      <span>Conditions:</span>
                      {" "}
                      <span>{item.conditions}{" "}{item.title === "House" ? "Rooms": "Square meter"}</span>
                    </div>
                    <div className="sms-style">
                      <span>Description:</span>
                      {" "}
                      <span>{item.description.slice(0,5)}{" "}......</span>
                    </div>
                  </div>
                  <div className="pl-5">
                  <div className="sms-style">
                      <span>Province:</span>
                      {" "}
                      <span>{item.province}</span>
                    </div>
                    <div className="sms-style">
                      <span>District:</span>
                      {" "}
                      <span>{item.district}</span>
                    </div>
                    <div className="sms-style">
                      <span>Sector:</span>
                      {" "}
                      <span>{item.sector}</span>
                    </div>
                    <div className="sms-style">
                      <span>Cell:</span>
                      {" "}
                      <span>{item.cell}</span>
                    </div>
                    <div className="sms-style">
                      <span>Village:</span>
                      {" "}
                      <span>{item.village}</span>
                    </div>
                    <div className="sms-style">
                      <span>Phone:</span>
                      {" "}
                      <span><a href={`0${item.postedBy && item.postedBy.phoneNumber}`}>0{item.postedBy && item.postedBy.phoneNumber}</a></span>
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

            {/* <div
                class="col-md-6 pt-2 d-md-block deal-requested container-fluid common-list"
                style={{ marginTop: "120px" }}
            >
                {
                    loading ?
                        <h2 class="text-center mt-5 pt-5">
                            {" "}
                            <Spinner
                                animation="border"
                                variant="dak"
                                class="text-center mt-5 pt-5"
                            />
                        </h2> : <>
                            {deal.length === 0 ?
                                <>
                                    <span className="fs-3 text-center mt-5">
                                        Requested Properties when available displayed here!
                                    </span>
                                </>
                                :
                                <h3 class="text-center fs-4 text-bold mb-4" style={{ whiteSpace: "pre-line" }}>
                                    Request/Order
                                </h3>
                            }
                            <div class="">
                                {deal && deal.map((item, index) => (
                                    <Link to={`/dealProperty/${item._id}`} class="text-decoration-none ">
                                        <div
                                            class="card mb-2 rounded-lg deal-card "
                                            style={{}}
                                            key={index}
                                        >
                                            <div class="card-body  bg-light rounded flex-wrap">
                                                <div class="card-text">
                                                    <div>Name: <span class="fs-6" style={{ whiteSpace: "pre-line" }}>{item.postedBy && item.postedBy.firstname}{"  "}{item.postedBy && item.postedBy.lastname}</span>{"  "}<span><i class="bi bi-telephone mr-1"></i>{" "}0{item.postedBy && item.postedBy.phoneNumber}{" "}</span>Price: <span>{formatPrice(item.price)} {item.currency}</span></div>
                                                    <div><span class="fs-6" style={{ whiteSpace: "pre-line" }}>{item.title}{" "}{item.category}</span>{" "}in {" "}{item.province}, {item.district}, {item.sector}</div>
                                                    <div>Conditions:{" "}{" "}<span class="fs-6" style={{ whiteSpace: "pre-line" }}>{item.conditions}</span> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </>
                }
            </div>
            {!loading && !deal && <Footer />} */}
        </>
    );
};

export default Deal