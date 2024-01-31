import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from "react-router-dom";
import { getSingleUssd } from '../actions/ussdAction';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from "react-bootstrap/Spinner";
import { formatPrice } from '../priceFormated'
import Footer from '../components/Footer';

const UssdDetail = () => {
  const [label, setLabel] = useState("")
  const { loading, ussdDetail } = useSelector((state) => state.getUssd)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getSingleUssd(id))
  }, [])

  function capitalizeFirstLetter(string) {
    if (string === undefined) {
      return "";
    } 
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
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
                <h3 className="fs-1 ">Property Details</h3>
              </div>
            </div>
            <div className="p-2">
              <div class="ussd-detail">
                <h1 class="fs-4 pr-2">Phone: </h1>
                <span class="fs-4 lh-3" style={{marginBottom: "6px"}}>{ussdDetail.phone}</span>
              </div>
              <div class="ussd-detail">
                <h1 class="fs-4 pr-2">Options:</h1>
                <span class="fs-4 lh-3" style={{marginBottom: "6px"}}>{capitalizeFirstLetter(ussdDetail.Options)}</span>
              </div>
              <div class="ussd-detail">
                <h1 class="fs-4 pr-2">Type:</h1>
                <span class="fs-4 lh-3 text-center" style={{marginBottom: "6px"}}>{ussdDetail.Type}</span>
              </div>
              <div class="ussd-detail">
                <h1 class="fs-4 pr-2">Province: </h1>
                <span class="fs-4 lh-3 text-center" style={{marginBottom: "6px"}}>{ussdDetail.province}</span>
              </div>
              <div class="ussd-detail">
                <h1 class="fs-4 pr-2">District:</h1>
                <span class="fs-4 lh-3 text-center" style={{marginBottom: "6px"}}>{ussdDetail.district}</span>
              </div>
              <div class="ussd-detail">
                <h1 class="fs-4 pr-2">Sector:</h1>
                <span class="fs-4 lh-3 text-center" style={{marginBottom: "6px"}}>{ussdDetail.sector}</span>
              </div>
              <div class="ussd-detail">
                <h1 class="fs-4 pr-2">Price:</h1>
                <span class="fs-4 lh-3 text-center" style={{marginBottom: "6px"}}>{formatPrice(ussdDetail && ussdDetail.price)} rwf</span>
              </div>
            </div>
          </div>
        )}
      </div>
      {!loading && <Footer />}
    </>
  )
}

export default UssdDetail
