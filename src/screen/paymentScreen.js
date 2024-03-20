import React, { useState } from 'react'
import Header from '../components/Header'
import { cashinRequest } from '../actions/paymentActions'
import { useDispatch, useSelector } from 'react-redux'
import { createProperty } from '../actions/propertiesAction'
import { useHistory } from "react-router-dom";

const PaymentScreen = () => {
    let token = localStorage.getItem("token");
    const [label, setLabel] = useState('');
    const history = useHistory();
    const [number, setNumber] = useState({})
    const [amount, setAmount] = useState({})
    const dispatch = useDispatch()
    const { publishProperty } = useSelector((state) => state.publishedProperty)
    const { loading } = useSelector(state => state.cashinpayment)
    const onNumberChange = (e) => {
        var em = e.target.value;
        if (em != "") {
            setNumber({ value: em });
        } else {
            setNumber({ value: em, message: "type your number" });
        }
    }

    const onAmountChange = (e) => {
        var em = e.target.value
        if (em != "") {
            setAmount({ value: em })
        } else {
            setAmount({ value: em, message: "Amount should be equal to 2000 for one property" })
        }

    }

    const paymentHandler = (e) => {
        e.preventDefault();
        if (!number.value) {
            setNumber({ message: "Type your number" });
        } else if (parseFloat(amount.value) !== 2000 && !amount.value) {
            setAmount({ message: "Amount should be equal to 1000 for one property" });
        } else {
            const payload = {
                number: number.value,
                amount: parseFloat(amount.value),
            };
            dispatch(cashinRequest(payload, token)).then(() => {
                // Payment successful, dispatch action to publish property
                dispatch(createProperty(publishProperty, token, history));
                // Redirect or show success message
            }).catch((error) => {
                // Handle payment error
                console.log("err", error)
            });

        }
    };

    return (
        <>
            <Header setLabel={setLabel} />
            <div class="container" style={{ marginTop: "120px" }}>
                <div class="row">
                    <div class="col-md-12">
                        <h1>Payment Options</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <p>You can also pay using the following methods:</p>
                        <ul>
                            <li>Pay with MTN Mobile Money.</li>
                        </ul>
                    </div>
                    <div class="col-md-6 bg-light">
                        <h2>Mobile Money</h2>
                        <p style={{ marginLeft: "-10px" }}>Pay with MTN Mobile Money.</p>
                        <ul>
                            <li>Amount to be paid for each property: RWF 2000 or $20</li>
                            <li>Enter your Momo Phone Number. to pay</li>
                            <form >
                                <div className='mb-2'>
                                    <input
                                        type="text"
                                        placeholder="ex 2000 or $20"
                                        class="form-control mb-3"
                                        onChange={onAmountChange}

                                    />
                                    <span class="text-danger">{amount.message}</span>
                                </div>
                                <div className='mb-2'>
                                    <input
                                        type="text"
                                        placeholder="ex 078/9"
                                        class="form-control mb-3"
                                        onChange={onNumberChange}
                                    />
                                    <span class="text-danger">{number.message}</span>
                                </div>
                                {
                                    loading ?
                                    <button
                                    class="btn login-btn btn-block fs-4"
                                    name="submit"
                                    onClick={paymentHandler}
                                >Loading.....</button>
                                :
                                <button
                                    class="btn login-btn btn-block fs-4"
                                    name="submit"
                                    onClick={paymentHandler}
                                >Pay</button>
                                }
                            </form>
                            <li>You will be prompted to enter your Mobile Money PIN to complete the payment.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentScreen