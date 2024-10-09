import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Contact() {
  const [label, setLabel] = useState()
  const [firstName, setFirstName] = useState({})
  const [lastName, setLastName] = useState({})
  const [email, setEmail] = useState({})
  const [phoneNumber, setPhoneNumber] = useState({})
  const [description, setDescription] = useState({})
  const [loading, setLoading] = useState(false)

  const onFirstNameChange = (e) => {
    var em = e.target.value;
    if (em != "") {
      setFirstName({ value: em });
    } else {
      setFirstName({ value: em, message: "Write your First Name" });
    }
  }

  const onLastNameChange = (e) => {
    var em = e.target.value
    if (em != "") {
      setLastName({ value: em })
    } else {
      setLastName({ value: em, message:  "Write your Last Name" });
    }
  }

  const onEmailChange = (e) => {
    var em = e.target.value;
    if (em != "") {
      setEmail({ value: em });
    } else {
      setEmail({ value: em, message: "Write your Email" });
    }
  }

  const onPhoneNumberChange = (e) => {
    var em = e.target.value;
    if (em != "") {
      setPhoneNumber({ value: em });
    } else {
      setPhoneNumber({ value: em, message:"Write your Phone Number" });
    }
  }

  const onDescriptionChange = (e) => {
    var em = e.target.value;
    if (em != "") {
      setDescription({ value: em });
    } else {
      setDescription({ value: em, message: "Write your Description" });
    }
  }

  const handleRequest = async (e) => {
    e.preventDefault()
    if (firstName.value == undefined || firstName.value == "") {
      setFirstName({ value: "", message: "Write your First Name" });
    } else if (lastName.value == undefined || lastName.value == "") {
      setLastName({ value: "", message: "Write your Last Name" });
    } else if (email.value == undefined || email.value == "") {
      setEmail({ value: "", message: "Write your Email" });
    } else if (phoneNumber.value == undefined || phoneNumber.value == "") {
      setPhoneNumber({ value: "", message: "Write your Phone Number" });
    } else if (description.value == undefined || description.value == "") {
      setDescription({ value: "", message: "Write your Description" });
    } else {
      try {
        const payload = {
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          phoneNumber: phoneNumber.value,
          description: description.value
        }
        setLoading(true)
        const res = await axios.post('http://localhost:5000/api/contactUs', payload)
        toast.success(res && res.data.message)
        setFirstName({})
        setLastName({})
        setEmail({})
        setPhoneNumber({})
        setDescription({})
        setLoading(false)

      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <>
      {/* <Header setLabel={setLabel}/>  data-aos='zoom-in-up'*/}
      <div className='pt-0 pb-5 pb-md-11' >
        <div className=' py-5 px-lg-5 '>
          <div className='mt-5 text-center' data-wow-delay='0.1s' >
            <h1 className='mb-5 display-6 dark-blue fw-bold'>Get In Touch!</h1>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-9'>
              <div className=' ' data-wow-delay='0.3s' >
                {/* shadow bg-white */}
                <form className='py-4 px-3 rounded mb-5' onSubmit={handleRequest}>
                  <div className='row g-3'>
                    <div className='col-md-6'>
                      <div className='form-floating'>
                        <input
                          type='text'
                          className='form-control'
                          id='name'
                          required={true}
                          placeholder='Your First Name'
                          onChange={onFirstNameChange}
                        />
                        <label htmlFor='name'>First Name</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-floating'>
                        <input
                          type='text'
                          className='form-control'
                          id='name'
                          required={true}
                          placeholder='Your Last Name'
                          onChange={onLastNameChange}
                        />
                        <label htmlFor='name'>Last Name</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-floating'>
                        <input
                          type='email'
                          className='form-control'
                          id='email'
                          required={true}
                          placeholder='Subject'
                          onChange={onEmailChange}
                        />
                        <label htmlFor='email'>Email</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-floating'>
                        <input
                          type='tel'
                          className='form-control'
                          id='phoneNumber'
                          required={true}
                          placeholder='phoneNumber'
                          onChange={onPhoneNumberChange}
                        />
                        <label htmlFor='phoneNumber'>Phone Number</label>
                      </div>
                    </div>
                    <div className='col-12'>
                      <div className='form-floating'>
                        <textarea
                          className='form-control'
                          style={{ height: "200px" }}
                          required={true}
                          placeholder='Leave a message here'
                          id='message'
                          onChange={onDescriptionChange}
                        ></textarea>
                        <label htmlFor='message'>Message</label>
                      </div>
                    </div>
                    <div className='col-12 text-center'>
                      <button class="btn  rounded-sm button-bg text-light btn-primary btn-lg btn-block" type='submit'>{loading ? "loading...." : "Send Message"}</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default Contact;