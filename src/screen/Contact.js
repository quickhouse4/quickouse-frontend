import React ,{ useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  const [label , setLabel ] = useState()
  return (
    <>
      <Header setLabel={setLabel}/>
      <div className='pt-0 pb-5 pb-md-11 mt-5'  data-aos='zoom-in-up'>
        <div className='container py-5 px-lg-5 '>
          <div className='mt-5 text-center wow fadeInUp' data-wow-delay='0.1s' >
            <h1 className='mb-5 display-6 dark-blue fw-bold'>Get In Touch!</h1>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-9'>
              <div className='wow fadeInUp' data-wow-delay='0.3s' >
                <form className='py-4 px-3 rounded shadow  mb-5 bg-white' onSubmit={"handleRequest"}>
                  <div className='row g-3'>
                    <div className='col-md-6'>
                      <div className='form-floating'>
                        <input type='text'  className='form-control' id='name' required={true} placeholder='Your Name' />
                        <label htmlFor='name'>Your Name</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-floating'>
                        <input type='email'  className='form-control' id='email' required={true} placeholder='Your Email' />
                        <label htmlFor='email'>Your Email</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-floating'>
                        <input type='text' className='form-control' id='subject' required={true} placeholder='Subject' />
                        <label htmlFor='subject'>Subject</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-floating'>
                        <input type='tel' className='form-control' id='subject' required={true} placeholder='Subject' />
                        <label htmlFor='phone'>Phone Number</label>
                      </div>
                    </div>
                    <div className='col-12'>
                      <div className='form-floating'>
                        <textarea className='form-control' style={{ height: "100px" }}  required={true} placeholder='Leave a message here' id='message'></textarea>
                        <label htmlFor='message'>Message</label>
                      </div>
                    </div>
                    <div className='col-12 text-center'>
                      <button class="btn  rounded-sm button-bg text-light btn-primary btn-lg btn-block" type='submit'>Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
