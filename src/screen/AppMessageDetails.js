import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from "react-router-dom";
import { getDetailsMessage } from '../actions/ussdAction';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from "react-bootstrap/Spinner";
import { formatPrice } from '../priceFormated'
import Footer from '../components/Footer';

const AppMessageDetails = () => {
    const [label, setLabel] = useState("")
    const { loading, appMessageDetail } = useSelector((state) => state.appDetails)
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getDetailsMessage(id))
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
                                <h1 class="fs-4 pr-2 fw-bold">Price: </h1>
                                <span class="fs-4 lh-3 fw-normal" style={{ marginBottom: "6px" }}>{formatPrice(appMessageDetail.price)}{" "}{appMessageDetail.currency}</span>
                            </div>
                            <div class="ussd-detail">
                                <h1 class="fs-4 pr-2 fw-bold">Title:</h1>
                                <span class="fs-4 lh-3 fw-normal" style={{ marginBottom: "6px" }}>{capitalizeFirstLetter(appMessageDetail.title)}</span>
                            </div>
                            <div class="ussd-detail">
                                <h1 class="fs-4 pr-2 fw-bold">Type:</h1>
                                <span class="fs-4 lh-3 text-center fw-normal" style={{ marginBottom: "6px" }}>{appMessageDetail.type}</span>
                            </div>
                            <div class="ussd-detail">
                                <h1 class="fs-4 pr-2 fw-bold">Status:</h1>
                                <span class="fs-4 lh-3 text-center fw-normal" style={{ marginBottom: "6px" }}>{appMessageDetail.businessStatus}</span>
                            </div>
                            <div class="ussd-detail">
                                <h1 class="fs-4 pr-2 fw-bold">{appMessageDetail.title === "Plot" ? "Size" : "Accomodation"}:</h1>
                                <span class="fs-4 lh-3 text-center fw-normal" style={{ marginBottom: "6px" }}>{appMessageDetail.conditions}{" "}{appMessageDetail.title === "Plot" ? "Square meter" : "Room"}</span>
                            </div>
                            <hr class="w-100 h-12" />
                            <div class="ussd-detail">
                                <h1 class="fs-4 pr-2 fw-bold">Province: </h1>
                                <span class="fs-4 lh-3 text-center fw-normal" style={{ marginBottom: "6px" }}>{appMessageDetail.province}</span>
                            </div>
                            <div class="ussd-detail">
                                <h1 class="fs-4 pr-2 fw-bold">District:</h1>
                                <span class="fs-4 lh-3 text-center fw-normal" style={{ marginBottom: "6px" }}>{appMessageDetail.district}</span>
                            </div>
                            <div class="ussd-detail">
                                <h1 class="fs-4 pr-2 fw-bold">Sector:</h1>
                                <span class="fs-4 lh-3 text-center fw-normal" style={{ marginBottom: "6px" }}>{appMessageDetail.sector}</span>
                            </div>
                            <div class="ussd-detail">
                                <h1 class="fs-4 pr-2 fw-bold">Cell:</h1>
                                <span class="fs-4 lh-3 text-center fw-normal" style={{ marginBottom: "6px" }}>{appMessageDetail.cell}</span>
                            </div>
                            <div class="ussd-detail">
                                <h1 class="fs-4 pr-2 fw-bold">Village:</h1>
                                <span class="fs-4 lh-3 text-center fw-normal" style={{ marginBottom: "6px" }}>{appMessageDetail.village} </span>
                            </div>
                            <hr class="w-100 h-12" />
                            <div class="ussd-detail">
                                <h1 class="fs-4 pr-2 fw-bold">Description:</h1>
                                <span class="fs-4 lh-3 text-center fw-normal" style={{ marginBottom: "6px" }}>{appMessageDetail.description} </span>
                            </div>
                            <hr class="w-100 h-12" />
                            <div class="ussd-detail">
                                <h1 class="fs-4 pr-2 fw-bold">Phone:</h1>
                                <a
                                    href={`0${appMessageDetail.postedBy && appMessageDetail.postedBy.phoneNumber}`}
                                    class="fs-4 lh-3 text-center fw-normal" style={{ marginBottom: "6px" }}>0{appMessageDetail.postedBy && appMessageDetail.postedBy.phoneNumber} </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {!loading && <Footer />}
        </>
    )
}

export default AppMessageDetails
