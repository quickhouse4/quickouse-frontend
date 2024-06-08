import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from '../components/DataTable';
import Footer from '../components/Footer';
import Spinner from "react-bootstrap/Spinner";
import { getTransactionAction } from '../actions/paymentAction';
import { calculateTotalCashIn, calculateTotalCashOut } from '../utils/calculate';
import moment from 'moment';

const Transactions = () => {
    const [label, setLabel] = useState('');
    const token = localStorage.getItem("token");
    const { transactions, loading } = useSelector((state) => state.getTransactions);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTransactionAction(token));
    }, [dispatch, token]);

    const columns = [
        {
            Header: "Date",
            accessor: "updatedOn",
            Cell: ({ value }) => moment(value).format("MMM Do YY"),
        },
        {
            Header: "Client",
            accessor: "number",
        },
        {
            Header: "Type",
            accessor: "type",
        },
        {
            Header: "Provider",
            accessor: "provider",
        },
        {
            Header: "Status",
            accessor: "status",
        },
        {
            Header: "Amount",
            accessor: "amount",
        },
    ];

    return (
        <>
            <Header setLabel={setLabel} />
            <div className="w-100 pt-2">
                <div className="d-flex position-relative flex-nowrap">
                    <Sidebar />
                    {loading ? (
                        <div className="d-flex justify-content-center align-items-center flex-grow-1">
                            <Spinner animation="border" variant="dark" />
                        </div>
                    ) : transactions.length === 0 ? (
                        <div className="d-flex justify-content-center align-items-center flex-grow-1">
                            <h2 className='fs-3'>No Transactions</h2>
                        </div>
                    ) : (
                        <div className='mb-4' style={{ marginTop: "117px" }}>
                            {transactions.length > 0 && (
                                <DataTable
                                    data={transactions}
                                    columns={columns}
                                    title="Transactions"
                                />
                            )}
                            <div className="flex-nowrap mt-5 w-full justify-content-end mr-5">
                                <div className='d-flex justify-content-end align-items-center gap-3'>
                                    <h3 className='fs-5'>CASHIN</h3>
                                    <span>RWF {calculateTotalCashIn(transactions)}</span>
                                </div>
                                <div className='d-flex justify-content-end align-items-center gap-3'>
                                    <h3 className='fs-5'>CASHOUT</h3>
                                    <span>RWF {calculateTotalCashOut(transactions)}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Transactions;
