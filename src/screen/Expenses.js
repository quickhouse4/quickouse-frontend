import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from '../components/DataTable';
import Footer from '../components/Footer';
import Spinner from "react-bootstrap/Spinner";
import { getUserExpense } from '../actions/paymentAction';

const Expenses = () => {
    const [label, setLabel] = useState('');
    const token = localStorage.getItem("token")
    const { transactions } = useSelector((state) => state.getTransactions)
    const {userExpense , loading} = useSelector((state) => state.userExpense)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserExpense(token))
    }, [])
    const columns = [
        {
            Header: "First Name",
            accessor: "firstname",
        },
        {
            Header: "Last Name",
            accessor: "lastname",
        },
        {
            Header: "Phone Number",
            accessor: "phoneNumber",
        },
        {
            Header: "Property",
            accessor: "propertyCount",
        },
        {
            Header: "Excess Properties",
            accessor: "excessProperties",

        },
        {
            Header: "Amount (RWF)",
            accessor: "expenses",
        },
        {
            Header: "Action",
            accessor: "",
            Cell: ({ row }) => (
                <div className="d-flex gap-3 ">
                    <div className="cursor-pointer">
                        <button className='fs-5 bg-primary rounded-3' >Pay</button>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <>
            <Header setLabel={setLabel} />
            <div class="w-100 pt-2">
                <div class="d-flex position-relative flex-nowrap">
                    <Sidebar />
                    {
                    loading ?
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
                                    userExpense.length > 0 && (
                                        <DataTable
                                            data={userExpense}
                                            columns={columns}
                                            title="Expenses"
                                            placeholder=""
                                        />
                                    )}
                            </div>
                        )}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Expenses