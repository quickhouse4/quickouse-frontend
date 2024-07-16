import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { resetUserPassword } from '../actions/userAction'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

const ResetPassword = () => {
    const [label, setLabel] = useState()
    const [password, setPassword] = useState({})
    const [showPassword, setShowPassword] = useState('')
    const { loading } = useSelector((state) => state.resetPassword)
    const dispatch = useDispatch()
    const history = useHistory()
    const { emailToken } = useParams()

    const onChangePassword = (e) => {
        const em = e.target.value
        if (em != "") {
            setPassword({ value: em })
        } else {
            setPassword({ value: em, message: "Type a Password" })
        }
    }
console.log(emailToken)
    const confirmPasswordHandler = async (e) => {
        e.preventDefault()
        if (password.value == "" || password.value == null) {
            setPassword({ message: "Type a Password" })
        } else {
            const payload = {
                password: password.value
            }
            dispatch(resetUserPassword(emailToken, payload))
            toast.success("your password has been changed successfully, login to continue");
            setTimeout(() => {
              history.push("/login");
            }, 6000)
        }
    }

    useEffect(() => {
        document.title = 'Quickhouse - Reset Password'
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <Header setLabel={setLabel} />
            <section style={{ marginTop: '120px', marginBottom: '100px' }}>
                <div className='container bg-light shadow rounded-2' id='container' style={{ minHeight: '500px' }}>
                    <div style={{ transform: 'translateX(0%)', width: '100%' }} className='form-container sign-up-container'>
                        <form style={{ maxWidth: '475px', margin: 'auto' }} onSubmit={(event) => confirmPasswordHandler(event)} className='acform'>
                            <h1 className='display-6 dark-blue py-5 fw-bold' style={{ marginLeft: '10px', color: "#071c36" }}>Set New Password</h1>
                            <div className='form-outline mb-4 col-md-9'>
                                <div className='form-floating relative'>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder='Password'
                                        className='form-control'
                                        autoComplete='false'
                                        onChange={onChangePassword}
                                        required
                                    />

                                    <i onClick={() => setShowPassword(!showPassword)} className={`${showPassword ? 'bi bi-eye' : 'bi bi-eye-slash'} position-absolute end-0 me-3 pb-2`} style={{ top: '40%', cursor: 'pointer' }} id='togglePassword'></i>
                                    <label htmlFor='password'>Password</label>
                                </div>
                            </div>
                            <div style={{ marginLeft: '70px' }}>
                                <button className='my-3 btn text-light py-3 rounded-md px-5 mx-auto' style={{ background: "#071c36" }} type={loading ? 'button' : 'submit'}>
                                    {loading ? <>Loading <div style={{ width: '12px', height: '12px' }} className='ms-2 spinner-border' role='status'></div></> : 'Set New Password'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ResetPassword