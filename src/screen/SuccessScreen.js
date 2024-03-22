import React, { useState } from 'react'
import Header from '../components/Header';
import { Link, useHistory, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { createProperty } from '../actions/propertiesAction'
import { paymentStatusAction } from '../actions/paymentActions'

const SuccessScreen = () => {
    const [label, setLabel] = useState('');
    const { paymentStatus, loading } = useSelector((state) => state.checkPaymentStatus)
    const { publishProperty } = useSelector((state) => state.publishedProperty)
    const { id } = useParams();

    console.log("id", id)
    return (
        <>
            <Header setLabel={setLabel} />
            <div class="container align-items-center" style={{ marginTop: "120px" }}>
                <h1>Payment Failed</h1>
                <h4>Try again!</h4>
            </div>
        </>
    )
}

export default SuccessScreen