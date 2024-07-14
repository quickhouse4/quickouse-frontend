import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../priceFormated';
import Header from '../components/Header';
import { getAppMessage } from "../actions/ussdAction";
import { Link } from 'react-router-dom';

const AllAppMessage = () => {
    const dispatch = useDispatch();
    const { appMessageLoading, appMessage, appMessageError } = useSelector((state) => state.appReducer);
    const [label, setLabel] = useState('');

    useEffect(() => {
        dispatch(getAppMessage());
    }, [dispatch]);

    const capitalizeFirstLetter = (string) => {
        if (string === undefined) {
            return '';
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    // const getStatusStyle = (status) => {
    //     const capitalizedStatus = capitalizeFirstLetter(status);
    //     switch (capitalizedStatus) {
    //         case "For Rent":
    //             return { background: "#B3E5FC", borderRadius: "5px", padding: "2px 5px" };
    //         case "For Rent Out":
    //             return { background: "#FFCDD2", borderRadius: "5px", padding: "2px 5px" };
    //         case "For Sale":
    //             return { background: "#FFCDD2", borderRadius: "5px", padding: "2px 5px" };
    //         case "For Buy":
    //             return { background: "#B3E5FC", borderRadius: "5px", padding: "2px 5px" };
    //         default:
    //             return { background: "#FFFFFF", borderRadius: "5px", padding: "2px 5px" };
    //     }
    // };
    function getStatusStyle(status) {
        const capitalizedStatus = capitalizeFirstLetter(status);
        switch (capitalizedStatus) {
          case "For Rent":
            return { color: "#0E7BE3" };
          case "For Rent Out":
            return { color: "#e60000" };
          case "For Sale":
            return { color: "#e60000" };
          case "For Buy":
            return { color: "#0E7BE3" };
          default:
            return { color: "#FFFFFF" };
        }
      }

    return (
        <>
            <Header setLabel={setLabel} />
            <div className="container-fluid top-all">
                {appMessageLoading ? (
                    <h2 className="text-center mt-5 pt-5">
                        <div className="spinner-border text-dark" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </h2>
                ) : appMessageError ? (
                    <div className="text-danger text-center">{appMessageError}</div>
                ) : (
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        {appMessage.map((item, index) => (
                            <Link to={`/detailsMessage/${item._id}`} className="col" key={index}>
                                <div className="card h-100 shadow-sm">
                                    <div className="card-body">
                                        <p className="card-text d-flex justify-content-between">
                                            <div>
                                                <span style={{ fontSize: "12px", color: "#0E7BE3", fontWeight: "bold",...getStatusStyle(item.businessStatus) }}>Status:</span>
                                                <span style={{ fontSize: "12px",  }}>{capitalizeFirstLetter(item.businessStatus)}</span>
                                                <br />
                                                <span style={{ fontSize: "12px", color: "#0E7BE3", fontWeight: "bold",...getStatusStyle(item.businessStatus) }}>Type:</span>
                                                <span style={{ fontSize: "12px" }}>{capitalizeFirstLetter(item.title)}</span>
                                                <br />
                                                <span style={{ fontSize: "12px", color: "#0E7BE3", fontWeight: "bold",...getStatusStyle(item.businessStatus) }}>Price:</span>
                                                <span style={{ fontSize: "12px", marginRight: "10px" }}>{formatPrice(item.price)} {item.currency}</span>
                                                <br />
                                            </div>
                                            <div>
                                                <span style={{ fontSize: "12px", color: "#0E7BE3", fontWeight: "bold",...getStatusStyle(item.businessStatus) }}>Province:</span>
                                                <span style={{ fontSize: "12px" }}>{item.province}</span>
                                                <br />
                                                <span style={{ fontSize: "12px", color: "#0E7BE3", fontWeight: "bold",...getStatusStyle(item.businessStatus) }}>District:</span>
                                                <span style={{ fontSize: "12px" }}>{item.district}</span>
                                                <br />
                                                <span style={{ fontSize: "12px", color: "#0E7BE3", fontWeight: "bold",...getStatusStyle(item.businessStatus) }}>Sector:</span>
                                                <span style={{ fontSize: "12px" }}>{item.sector}</span>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default AllAppMessage;
