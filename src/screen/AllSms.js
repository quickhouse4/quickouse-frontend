import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClientUssd } from '../actions/ussdAction';
import { formatPrice } from '../priceFormated';
import Header from '../components/Header';

const AllSms = () => {
    const dispatch = useDispatch();
    const { ussdLoading, ussd, ussdError } = useSelector((state) => state.getUssdMessage);
    const [loading, setLoading] = useState(false);
    const [label, setLabel] = useState('');
    useEffect(() => {
        dispatch(getClientUssd());
    }, [dispatch]);

    const capitalizeFirstLetter = (string) => {
        if (string === undefined) {
            return '';
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const getStatusStyle = (status) => {
        switch (status) {
            case 'For Rent':
                return { backgroundColor: '#C1FFD7' };
            case 'For Rent Out':
                return { backgroundColor: '#FFECB3' };
            case 'For Sale':
                return { backgroundColor: '#FFCDD2' };
            case 'For Buy':
                return { backgroundColor: '#B3E5FC' };
            default:
                return { backgroundColor: '#FFFFFF' };
        }
    };

    return (
        <>
        <Header setLabel={setLabel} />
            <div className="container-fluid top-all">
                {loading || ussdLoading ? (
                    <h2 className="text-center mt-5 pt-5">
                        <div className="spinner-border text-dark" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </h2>
                ) : ussdError ? (
                    <div className="text-danger text-center">{ussdError}</div>
                ) : (
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        {ussd.map((item, index) => (
                            <div className="col" key={index}>
                                <div className="card h-100 shadow-sm" style={getStatusStyle(capitalizeFirstLetter(item.Options))}>
                                    <div className="card-body">
                                        <div>
                                            <span style={{ fontSize: "12px", marginLeft: "16px", fontWeight: "bold" }}>Status:</span>
                                            <span style={{ fontSize: "12px", marginLeft: "16px" }}>{capitalizeFirstLetter(item.Options)}</span>
                                        </div>
                                        <p className="card-text d-flex justify-content-between">
                                            <div>
                                                <span style={{ fontSize: "12px", color: "#0E7BE3",fontWeight: "bold" }}>Type:</span>
                                                <span style={{ fontSize: "12px" }}>{capitalizeFirstLetter(item.Type)}</span>
                                                <br />
                                                <span style={{ fontSize: "12px", color: "#0E7BE3",fontWeight: "bold" }}>Price:</span>
                                                <span style={{ fontSize: "12px", marginRight: "10px" }}>{formatPrice(item.price)} rwf {" "} </span>
                                                <br />
                                                <span style={{ fontSize: "12px", color: "#0E7BE3",fontWeight: "bold" }}>Province:</span>
                                                <span style={{ fontSize: "12px" }}>{item.province}</span>
                                                <br />
                                            </div>
                                            <div>
                                                <span style={{ fontSize: "12px", color: "#0E7BE3",fontWeight: "bold"}}>District:</span>
                                                <span style={{ fontSize: "12px" }}>{item.district}</span>
                                                <br />
                                                <span style={{ fontSize: "12px", color: "#0E7BE3",fontWeight: "bold" }}>Sector:</span>
                                                <span style={{ fontSize: "12px" }}>{item.sector}</span>
                                                <br />
                                                <span style={{ fontSize: "12px", color: "#0E7BE3",fontWeight: "bold" }}>Phone:</span><a href={`tel:${item.phone}`} style={{ fontSize: "12px" }}>{item.phone}</a>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default AllSms;