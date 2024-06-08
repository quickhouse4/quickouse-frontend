import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { personDeal } from '../actions/dealAction';
import Spinner from "react-bootstrap/Spinner";
import Sidebar from './Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getClientUssd } from '../actions/ussdAction';
import DataTable from '../components/DataTable';
import { formatPrice } from '../priceFormated';
import { MdDelete } from "react-icons/md";
import { MdOutlineModeEditOutline } from "react-icons/md";
import axios from 'axios';

const MyLists = () => {
    const [label, setLabel] = useState('');
    const token = localStorage.getItem("token");
    const { ussd, ussdLoading } = useSelector((state) => state.getUssdMessage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getClientUssd());
    }, [dispatch]);

    const deleteHandler = async (id) => {
        const response = await axios.delete(`https://quickhouse.herokuapp.com/ussd/${id}`);
        if (response.status === 200) {
            window.location.reload();
        }
    };

    const openChangeStatusModal = (id) => {};

    const columns = [
        {
            Header: 'Options',
            accessor: 'Options',
            Cell: ({ value }) => value,
        },
        {
            Header: 'Type',
            accessor: 'Type',
        },
        {
            Header: 'Price',
            accessor: 'price',
            Cell: ({ value }) => formatPrice(value) + ' RWF',
        },
        {
            Header: 'Province',
            accessor: 'province',
        },
        {
            Header: 'District',
            accessor: 'district',
        },
        {
            Header: 'Sector',
            accessor: 'sector',
        },
        {
            Header: 'Phone',
            accessor: 'phone',
        },
        {
            Header: 'Action',
            accessor: '',
            Cell: ({ row }) => (
                <div className="d-flex gap-3">
                    <div className="w-25">
                        <MdOutlineModeEditOutline
                            onClick={() => openChangeStatusModal(row.original._id)}
                            cursor="pointer"
                            data-toggle="modal"
                            data-target="#myModal"
                            className="btn-primary text-white rounded-circle p-1 w-100 h-100"
                        />
                    </div>
                    <div className="w-25">
                        <MdDelete
                            onClick={() => deleteHandler(row.original._id)}
                            cursor="pointer"
                            className="bg-danger text-white rounded-circle p-1 w-100 h-100"
                        />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <>
            <Header setLabel={setLabel} />
            <div className="w-100 pt-2">
                <div className="d-flex position-relative flex-nowrap">
                    <Sidebar />
                    {ussdLoading ? (
                        <div className="d-flex justify-content-center align-items-center flex-grow-1">
                            <Spinner animation="border" variant="dark" />
                        </div>
                    ) : ussd.length === 0 ? (
                        <div className="d-flex justify-content-center align-items-center flex-grow-1">
                            <h2 className='fs-3'>No Lists Available</h2>
                        </div>
                    ) : (
                        <div className="mb-4" style={{ marginTop: '117px' }}>
                            <DataTable
                                data={ussd}
                                columns={columns}
                                title="All Ussd Lists"
                                placeholder=""
                            />
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MyLists;
