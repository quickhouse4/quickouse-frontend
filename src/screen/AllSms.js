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

    // const getStatusStyle = (options) => {
    //     switch (options) {
    //         case 'Nkeneye kugura':
    //             return { backgroundColor: "#C1E1FF" ,padding: "2px" ,borderRadius: "5px"};
    //         case 'Ndagurisha':
    //             return { backgroundColor: "#ffec1a" ,padding: "2px" ,borderRadius: "5px" };
    //         case 'Ndakodesha(Tenant)':
    //             return { backgroundColor: "#C1E1FF" ,padding: "2px" ,borderRadius: "5px"};
    //         case 'Ndakodesha(Landlord)':
    //             return { backgroundColor: "#ffec1a" ,padding: "2px" ,borderRadius: "5px"};
    //         default:
    //             return { backgroundColor: '#FFFFFF' ,padding: "2px" ,borderRadius: "5px"};
    //     }
    // };
    function getStatusStyle(status) {
        const capitalizedStatus = capitalizeFirstLetter(status);
        switch (capitalizedStatus) {
            case "Nkeneye kugura":
                return { color: "#0E7BE3", fontWeight: "bold" };
            case "Ndagurisha":
                return { color: "#e60000", fontWeight: "bold" };
            case "Ndakodesha(Tenant)":
                return { color: "#e60000", fontWeight: "bold" };
            case "Ndakodesha(Landlord)":
                return { color: "#0E7BE3", fontWeight: "bold" };
            default:
                return { color: "#FFFFFF", fontWeight: "bold" };
        }
    }

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
                                <div className="card h-100 shadow-sm">
                                    <div className="card-body">
                                        <div className='ml-1'>
                                            <span style={{ fontSize: "12px", marginLeft: "16px", ...getStatusStyle(item.Options) }}>Status:</span>
                                            <span style={{ fontSize: "12px", marginLeft: "16px" }}>{capitalizeFirstLetter(item.Options)}</span>
                                        </div>
                                        <p className="card-text d-flex justify-content-between">
                                            <div>
                                                <span style={{ fontSize: "12px", ...getStatusStyle(item.Options) }}>Type:</span>
                                                <span style={{ fontSize: "12px" }}>{capitalizeFirstLetter(item.Type)}</span>
                                                <br />
                                                <span style={{ fontSize: "12px", ...getStatusStyle(item.Options) }}>Price:</span>
                                                <span style={{ fontSize: "12px", marginRight: "10px" }}>{formatPrice(item.price)} rwf {" "} </span>
                                                <br />
                                                <span style={{ fontSize: "12px", ...getStatusStyle(item.Options) }}>Province:</span>
                                                <span style={{ fontSize: "12px",marginRight: "10px" }}>{item.province}</span>
                                                <br />
                                            </div>
                                            <div>
                                                <span style={{ fontSize: "12px", ...getStatusStyle(item.Options)  }}>District:</span>
                                                <span style={{ fontSize: "12px",marginRight: "10px" }}>{item.district}</span>
                                                <br />
                                                <span style={{ fontSize: "12px", ...getStatusStyle(item.Options)  }}>Sector:</span>
                                                <span style={{ fontSize: "12px" ,marginRight: "10px"}}>{item.sector}</span>
                                                <br />
                                                <span style={{ fontSize: "12px", ...getStatusStyle(item.Options)  }}>Phone:</span><a href={`tel:${item.phone}`} style={{ fontSize: "12px" }}>{item.phone}</a>
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