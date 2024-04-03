import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from '../components/DataTable';
import Footer from '../components/Footer';
import Spinner from "react-bootstrap/Spinner";
import { getTransactionAction } from '../actions/paymentAction';
import { calculateTotalCashIn, calculateTotalCashOut } from '../utils/calculate';

const Transactions = () => {
    const [label, setLabel] = useState('');
    const token = localStorage.getItem("token")
    const { transactions, loading } = useSelector((state) => state.getTransactions)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getTransactionAction(token))
    }, [])
    const columns = [
        {
            Header: "Client",
            accessor: "number",
        },

        {
            Header: "Type",
            accessor: "type",
        },
        {
            Header: "Status",
            accessor: "status",

        },
        {
            Header: "Amount",
            accessor: "amount",
        },
        // {
        //     Header: "Action",
        //     accessor: "",
        //     Cell: ({ row }) => (
        //         <h1></h1>
        //     ),
        // },
    ];

    return (
        <>
            <Header setLabel={setLabel} />
            <div class="w-100 pt-2">
                <div class="d-flex position-relative flex-nowrap">
                    <Sidebar />
                    {loading ?
                        <h2 class="d-flex justify-content-center align-items-center flex-grow-1">
                            {" "}
                            <Spinner
                                animation="border"
                                variant="dark"
                            />
                        </h2>
                        :
                        (
                            <div className='mb-4' style={{ marginTop: "117px" }}>
                                {
                                    transactions.length > 0 && (
                                        <DataTable
                                            data={transactions}
                                            columns={columns}
                                            title="Transactions"
                                            placeholder=""
                                        />
                                    )}

                                <div class="flex-nowrap mt-5 w-full justify-content-end mr-5">
                                    <div className='d-flex justify-content-end align-items-center gap-3'>
                                        <h3 className='fs-5'>CASHIN</h3>
                                        <span className=''>RWF {calculateTotalCashIn(transactions)}</span>
                                    </div>
                                    <div className='d-flex justify-content-end align-items-center gap-3'>
                                        <h3 className='fs-5'>CASHOUT</h3>
                                        <span className=''>RWF {calculateTotalCashOut(transactions)}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Transactions
