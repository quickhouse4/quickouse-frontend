import React, { useState } from 'react'
import Header from '../components/Header'

const PaymentScreen = () => {
    const [label, setLabel] = useState('')
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
                        <p>Pay with MTN Mobile Money.</p>
                        <ul>
                            <li>Amount to be paid for each property: RWF 2000 or $20</li>
                            <li>Enter your Momo Phone Number. to pay</li>
                            <form className='d-flex'>
                                <input 
                                type="text" 
                                placeholder="ex 078/9" 
                                class="form-control"
                                />
                                <button 
                                class="btn  login-btn"
                                name="submit"
                                >Pay</button>
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