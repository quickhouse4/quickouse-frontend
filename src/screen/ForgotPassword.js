import React from 'react'
import { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { userForgotPassword } from '../actions/userAction'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [label, setLabel] = useState()
  const [email, setEmail] = useState()
  const [act, setAct] = useState(false)
  const history = useHistory();
  const dispatch = useDispatch()
  const { loadingPass, error } = useSelector((state) => state.forgotPassword)

  const onEmailChange = (e) => {
    var em = e.target.value;
    if (em != "") {
      setEmail({ value: em });
    } else {
      setEmail({ value: em, message: "Write your email" });
    }
  }; 

  const passwordResetHandler = async (e) => {
    e.preventDefault();
    if (!email.value) {
      setEmail({ message: "Write your email" });
    } else {
      const payload = {
        email: email.value,
      };
      try {
        await dispatch(userForgotPassword(payload));
        toast.success("Password reset email sent successfully");
        setTimeout(() => {
          
          history.push("/login");
        }, 6000)
      } catch (error) {
        toast.warn("Incorrect email");
      }
    }
  };
  

  return (
    <>
      <Header setLabel={setLabel} />
      <div style={{ marginTop: '120px', marginBottom: '100px' }}>
       
        <div className='container shadow bg-light rounded-2' id='container' style={{ minHeight: '500px' }}>
          <div style={{ transform: 'translateX(0%)', width: '100%' }} className='form-container sign-up-container'>
            <form style={{ maxWidth: '490px', margin: 'auto' }} className='acform' onSubmit={(event) => passwordResetHandler(event)}>
              <h1 className='display-6 fw-bold py-5' style={{ marginLeft: "120px", color: "#071c36" }}>Reset Password</h1>
              {/* {act ?
                <div className='info reset'>
                  <p>You have been mailed on way to reset your password</p>
                  <Link to='/login' style={{ display: 'block', textAlign: 'center', color: "#071c36", fontWeight: "bold" }}>Back to Login</Link>
                </div>

                : */}
              <div>
                <div className='info reset'>
                  {/* <p>To keep connected with us please login with your personal info</p> */}
                </div>
                <div className='form-outline mb-4 px-3'>
                  <div className='form-floating'>
                    <input disabled={loadingPass}
                      type='email'
                      className='form-control'
                      placeholder='Email'
                      onChange={onEmailChange}
                      required
                    />
                    <label htmlFor='email'>Email</label>
                  </div>
                </div>
                <div style={{ marginLeft: '120px' }}>
                  <button className='my-3 btn text-light py-3 rounded-md px-5 mx-auto' style={{ background: "#071c36" }} type='submit'>
                    {loadingPass ? <>Loading <div style={{ width: '12px', height: '12px' }} className='ms-2 spinner-border' role='status'></div></> : 'Reset Password'}
                  </button>
                </div>
                <Link to='/login' style={{ display: 'block', marginTop: '10px', marginLeft: '160px', color: "#071c36", fontWeight: "bold" }}>
                  Back to Login
                </Link>
              </div>
              {/* } */}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ForgotPassword