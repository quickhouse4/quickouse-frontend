import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { getSingleDeal } from "../actions/dealAction";
import Spinner from "react-bootstrap/Spinner";
import Footer from "../components/Footer"
import { formatPrice } from "../priceFormated";

const DealDeatail = () => {
  const [label, setLabel] = useState("")
  const deal = useSelector((state) => state.getOneDeal)
  const { loading, dealDetail } = deal

  const { id } = useParams()

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleDeal(id))
  }, [])
  console.log("deal", deal)
  return (
    <>
      <Header setLabel={setLabel} />
      <div style={{ marginTop: "150px" }}>
        {loading ? (
          <h2 class="text-center mt-5 pt-5">
            {" "}
            <Spinner
              animation="border"
              variant="dark"
              class="text-center mt-5 pt-5 w-100"
            />{" "}
          </h2>
        ) : (
          <div className="col-8 mt-5 mx-auto px-4 py-5 rounded shadow mb-5 bg-white ">
            <div className="mb-5">
              <div className="text-center">
                <h3 className="fs-1 ">Request Details</h3>
              </div>
            </div>
            <div className="p-2">
              <div class="post-by-details">
                <div className="postByName">
                  <p class=" mr-1 ml-1 display-3 fs-3">PostedBy:</p>
                  <h5 class="p-name"> <span class="text-uppercase">{`${dealDetail.postedBy && dealDetail.postedBy.firstname} `}</span>{dealDetail.postedBy && dealDetail.postedBy.lastname}</h5>
                </div>
                <div className="postByPhone">
                  <i class="bi bi-telephone mr-1"></i>
                  <a href={`tel:0${dealDetail.postedBy && dealDetail.postedBy.phoneNumber}`}>
                    {`0${dealDetail.postedBy && dealDetail.postedBy.phoneNumber}`}
                  </a>
                </div>
              </div>
              <div class="deal-detail">
                <h1 class="fs-3">Title: </h1>
                <p class="fs-3 lh-3 text-center p-detail">{dealDetail.title}</p>
              </div>
              <div class="deal-detail">
                <h1 class="fs-3">Options: </h1>
                <p class="fs-3 lh-3 text-center p-detail">{dealDetail.type}</p>
              </div>
              <div class="deal-detail">
                <h1 class="fs-3">Category: </h1>
                <p class="fs-4 lh-3 text-center p-detail">{dealDetail.category}</p>
              </div>
              <div class="deal-detail">
                <h1 class="fs-3">Conditions: </h1>
                <p class="fs-3 lh-3 text-center p-detail">{dealDetail.conditions}</p>
              </div>
              <div class="deal-detail">
                <h1 class="fs-3">Province:</h1>
                <p class="fs-3 lh-3 text-center p-detail">{dealDetail.province}</p>
              </div>
              <div class="deal-detail">
                <h1 class="fs-3">District:</h1>
                <p class="fs-3 lh-3 text-center p-detail">{dealDetail.district}</p>
              </div>
              <div class="deal-detail">
                <h1 class="fs-3">Sector:</h1>
                <p class="fs-3 lh-3 text-center p-detail">{dealDetail.sector}</p>
              </div>
              <div class="deal-detail">
                <h1 class="fs-3">Price:</h1>
                <p class="fs-3 lh-3 text-center p-detail">{formatPrice(dealDetail.price)} {" "} {dealDetail.currency}</p>
              </div>
              <div class="">
                <h1 class="fs-3">Description:</h1>
                <p class="fs-3 lh-3 text-center p-detail p-left">
                  {dealDetail.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      {!loading && <Footer />}
    </>
  )
}

export default DealDeatail