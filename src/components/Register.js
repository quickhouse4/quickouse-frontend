import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Puff } from "react-loader-spinner";

const Register = () => {
  const history = useHistory();
  const [label, setLabel] = useState('');
  const [firstname, setFirst] = useState({});
  const [lastname, setLast] = useState({});
  const [phoneNumber, setPhoneNumber] = useState({})
  const [email, setEmail] = useState({});
  const [password, setPass] = useState({});
  const [confirm_password, setConfirm] = useState({});
  const [loading, setLoading] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword , setShowConfirmPassword] = useState(false)

  const onFirstChange = (e) => {
    var em = e.target.value;
    if (em != "") {
      setFirst({ value: em });
    } else {
      setLast({ value: em, message: "Write your Name" });
    }
  };

  const onLastChange = (e) => {
    var em = e.target.value;
    if (em != "") {
      setLast({ value: em });
    } else {
      setLast({ value: em, message: "Write your Name" });
    }
  };

  const onPhoneChange = (e) => {
    var phone = e.target.value;
    if (phone != "") {
      setPhoneNumber({ value: phone });
    } else {
      setPhoneNumber({ value: phone, message: "Write Phone number" });
    }
  };

  const onEmailChange = (e) => {
    var email = e.target.value;
    if (email != "") {
      setEmail({ value: email });
    } else {
      setEmail({ value: email, message: "Write Email" });
    }
  };
  const onPasswordChange = (e) => {
    var password = e.target.value;
    if (password != "") {
      setPass({ value: password });
    } else {
      setPass({ value: password, message: "enter your password" });
    }
  };

  const onPasswodConfirmCahnge = (e) => {
    var confirm = e.target.value;
    if (confirm != "") {
      setConfirm({ value: confirm_password });
    } else {
      setConfirm({ value: confirm_password, message: "confirm your password" });
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();

    if (firstname.value == null || firstname.value == "") {
      setFirst({ message: "Write your firstname" });
    } else if (lastname.value == null || lastname.value == "") {
      setLast({ message: "Write your lastname" });
    } else if (phoneNumber.value == null || phoneNumber.value == "") {
      setPhoneNumber({ message: "write your phone number" })
    } else if (email.value == null || email.value == "") {
      setEmail({ message: "Write your email" });
    } else if (!email.value.includes("@")) {
      setEmail({ message: "Please Include '@'" });
    } else if (password.value == null || password.value == "") {
      setPass({ message: "enter your password" });
    } else if (confirm_password.value == null || confirm_password.value == "") {
      setConfirm({ message: "Please confirm Password" });
      // } else if (confirm_password.value !== password.value) {
      //   setConfirm({ message: "Password does not match" });
    } else {
      const payload = {
        firstname: firstname.value,
        lastname: lastname.value,
        phoneNumber:phoneNumber.value,
        email: email.value,
        password: password.value,
      };
      console.log(password, confirm_password);
      try {
        setLoading(true);
        const response = await axios.post(
          "http://197.243.26.162/api/auth/signup",
          payload
        );
        history.push("/login");
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.warn(error.response.data.error);
      }
    }
  };
  return (
    <>
      <Header setLabel={setLabel} />
      <div class="container" style={{ marginTop: "130px" }}>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12 bg-light mt-4 pt-4 mb-4">
            {/* {loading ?  <Puff
              height="100"
              width="100"
              radisu={1}
              color="#4fa94d"
              ariaLabel="puff-loading"
              wrapperStyle={{
                margin:"auto",
                paddingTop:"6rem"
              }}
              wrapperClass=""
              visible={true}
              />:null} */}
            <h2 class="p-2 text-center login-header">Sign up</h2>
            <form class="p-3">
              <div class="form-row">
                <div class="col-md-6">
                  <label class="text-dark text-bold">Firstname</label>
                  <input
                    type="text"
                    class="form-control"
                    onChange={onFirstChange}
                  />
                  <span class="text-danger">{firstname.message}</span>
                </div>

                <div class="col-md-6">
                  <label class="text-dark text-bold">Lastname</label>
                  <input
                    type="text"
                    class="form-control"
                    onChange={onLastChange}
                  />
                  <span class="text-danger">{lastname.message}</span>
                </div>
              </div>

              <div class="form-group">
                <label class="text-dark text-bold p-1">Phone Number</label>
                <input
                  type="tel"
                  class="form-control"
                  onChange={onPhoneChange}
                  required
                />{" "}
                <span class="text-danger">{phoneNumber.message}</span>
              </div>
              <div class="form-group">
                <label class="text-dark text-bold p-1">Email</label>
                <input
                  type="email"
                  class="form-control"
                  onChange={onEmailChange}
                  required
                />{" "}
                <span class="text-danger">{email.message}</span>
              </div>
              <div class="form-group position-relative">
                <label class="text-dark text-bold">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  class="form-control"
                  onChange={onPasswordChange}
                />
                <i onClick={() => setShowPassword(!showPassword)} className={`showPassword ${showPassword ? 'bi bi-eye' : 'bi bi-eye-slash'} position-absolute end-0 me-3 pb-2`} style={{ top: '53%', cursor: 'pointer' }} id='togglePassword'></i>
                <span class="text-danger">{password.message}</span>
              </div>

              <div class="form-group position-relative">
                <label class="teaxt-dark text-bold">Confirm Password</label>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  class="form-control"
                  onChange={onPasswodConfirmCahnge}
                />
                <i onClick={() => setShowConfirmPassword(!showConfirmPassword)} className={`showPassword ${showConfirmPassword ? 'bi bi-eye' : 'bi bi-eye-slash'} position-absolute end-0 me-3 pb-2`} style={{ top: '53%', cursor: 'pointer' }} id='togglePassword'></i>
                <span class="text-danger">{confirm_password.message}</span>
              </div>

              <div class="checkbox">
                <label class="text-dark text-bold d-flex align-items-center">
                  <input type="checkbox" value="" style={{width:"20px" , height:"20px"}} class="mr-1"/>
                  Accept terms and conditions
                </label>
              </div>
              <br />

              {loading ? (
                <button class="btn btn-block  login-btn" type="button" disabled>
                  <span
                    class="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading...
                </button>
              ) : (
                <button
                  class="btn btn-lg btn-block login-btn"
                  name="submit"
                  onClick={handleRegister}
                >
                  Register
                </button>
              )}
            </form>
            <div class="p-2">
              <span class="text-primary"> Already have an Account?</span>
              <Link to="/login">
                <span class="text-dark text-bold pl-2">Sign in here</span>
              </Link>
              <div>
                <span class="text-primary">Forgot ?</span>
                <Link to="/forgot-password" class="text-dark text-bold">
                  <span class="ml-2">Password</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
