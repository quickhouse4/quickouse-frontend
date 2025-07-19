import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import { MdDelete } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

import Sidebar from './Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DataTable from '../components/DataTable';
import { getClientUssd } from '../actions/ussdAction';
import { myProperties } from '../actions/propertiesAction';
import { formatPrice } from '../priceFormated';

const MyProperties = () => {
    const [label, setLabel] = useState('');
    const token = localStorage.getItem("token");
    const { myProperty, loadingMyProperties } = useSelector((state) => state.myPropertiesList);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const modalRef = useRef(null);

    useEffect(() => {
        dispatch(getClientUssd());
        dispatch(myProperties(token));
    }, [dispatch, token]);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) closeModal();
        };
        document.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, []);

    const openModal = (property) => {
        setSelectedProperty(property);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProperty(null);
    };

    const changeVisibility = async () => {
        if (!selectedProperty) return;

        try {
            const payload = {
                visible: `${!selectedProperty.viewable}`
            }
            console.log("payload", payload)
            const res = await axios.patch(`https://quickhouse-436caeb406a0.herokuapp.com/api/property/visibility/${selectedProperty._id}`, payload, {
                headers: {
                    token: token
                }
            });
            dispatch(myProperties(token));
            closeModal();
        } catch (error) {
            console.error("Error", error);
        }
    };

    const deleteHandler = async (id) => {
        if (window.confirm("Are you sure you want to delete this property?")) {
            try {
                await axios.delete(`https://quickhouse-436caeb406a0.herokuapp.com/api/property/${id}`, {
                    headers: {
                        token: token
                    }
                });
                dispatch(myProperties(token));
            } catch (error) {
                console.error("Error deleting property:", error);
                alert("Failed to delete property. Please try again.");
            }
        }
    };

    const columns = [
        {
            Header: 'Published On',
            accessor: 'publishedOn',
            Cell: ({ value }) => moment(value).format("MMM Do YY")
        },
        {
            Header: 'Image',
            accessor: 'mainPhoto',
            Cell: ({ value }) => value ? <img src={value} alt="Property" style={{ width: '50px', height: '50px', borderRadius: '50%' }} /> : null,
        },
        {
            Header: 'Status',
            accessor: 'businessStatus',
        },
        {
            Header: 'Name',
            accessor: 'propertyName',
        },
        {
            Header: 'Type',
            accessor: 'type',
        },
        {
            Header: 'Price',
            accessor: 'price',
            Cell: ({ value }) => formatPrice(value) + ' RWF',
        },
        {
            Header: 'Province',
            accessor: 'city',
        },
        {
            Header: 'District',
            accessor: 'district',
        },
        {
            Header: 'Viewable',
            accessor: 'viewable',
            Cell: ({ value }) => value ? "Yes" : "No",
        },
        {
            Header: 'Action',
            accessor: '',
            Cell: ({ row }) => (
                <div className="d-flex gap-3">
                    <div className="w-25">
                        {row.original.viewable ? (
                            <FaRegEyeSlash
                                onClick={() => openModal(row.original)}
                                cursor="pointer"
                                className="bg-success text-white rounded-circle p-1 w-100 h-100"
                            />
                        ) : (
                            <FaRegEye
                                onClick={() => openModal(row.original)}
                                cursor="pointer"
                                className="bg-danger text-white rounded-circle p-1 w-100 h-100"
                            />
                        )}
                    </div>
                    <div className="w-25">
                        <MdDelete
                            onClick={() => deleteHandler(row.original._id)}
                            cursor="pointer"
                            className="bg-danger text-white rounded-circle p-1 w-100 h-100"
                        />
                    </div>
                </div>
            )
        },
    ];

    return (
        <>
            <Header setLabel={setLabel} />
            <div className="w-100 pt-2">
                <div className="d-flex position-relative flex-nowrap">
                    <Sidebar />
                    <div className="mb-4" style={{ marginTop: '117px' }}>
                        {loadingMyProperties ? (
                            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', marginLeft: "500px" }}>
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : myProperty && myProperty.length > 0 ? (
                            <DataTable
                                data={myProperty}
                                columns={columns}
                                title="My Properties"
                                placeholder=""
                            />
                        ) : (
                            <div className="d-flex justify-content-center align-items-center">
                                <h2>No properties available</h2>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />

            {isModalOpen && selectedProperty && (
                <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" ref={modalRef}>
                            <div className="modal-header">
                                <h5 className="modal-title">Change Visibility</h5>
                                <button type="button" className="close" onClick={closeModal}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Do you want to make this property {selectedProperty.viewable ? 'invisible' : 'visible'}?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={changeVisibility}>Yes, change it</button>
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MyProperties;
