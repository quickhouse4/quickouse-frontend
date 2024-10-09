import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Puff } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Login() {
  const [label, setLabel] = useState('');
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState({});
  const [loading, setLoading] = useState("");
  const [alert, setAlert] = useState(false);
  const [pass, setPassword] = useState({});

  const onUsernameChange = (e) => {
    var em = e.target.value;
    if (em != "") {
      setUsername({ value: em });
    } else {
      setUsername({ value: em, message: "Write your username" });
    }
  };

  const onPassChange = (e) => {
    var em = e.target.value;
    if (em != "") {
      setPassword({ value: em });
    } else {
      setPassword({ value: em, message: "Enter you Password" });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (username.value == null || username.value == "") {
      setUsername({ message: "Write your email" });
    } else if (pass.value == null || pass.value == "") {
      setPassword({ message: "Enter your password" });
    } else {
      const payload = {
        email: username.value,
        password: pass.value,
      };
      try {
        setLoading(true);
        const response = await axios.post(
          "http://197.243.26.162/api/auth/signin",
          payload
        );
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("email", response.data.data.userData.email);
        
        toast.success("Login successfully");
        history.push("/", payload);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.warn(error.response.data.error);
        history.push("/login", payload);
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
            <h4
              style={{
                color: "red",
              }}
            >
              {alert ? "Username or Password is wrong" : ""}
            </h4>

            <h1 class="p-2 text-center login-header">Login</h1>

            <form class="p-3">
              <div class="form-group">
                <label class="text-dark text-bold">Username</label>

                <input
                  type="text"
                  name="username"
                  class="form-control"
                  onChange={onUsernameChange}
                />
                <span class="text-danger">{username.message}</span>
              </div>

              <div class="form-group">
                <label class="text-dark text-bold">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name=""
                  class="form-control"
                  onChange={onPassChange}
                />
                <i onClick={() => setShowPassword(!showPassword)} className={`showPassword ${showPassword ? 'bi bi-eye' : 'bi bi-eye-slash'} position-absolute end-0 me-5 pb-2`} style={{}} id='togglePassword'></i>
                <span class="text-danger">{pass.message}</span>
              </div>
              <div class="form-group">
                <div class="checkbox ">
                  <label class="text-dark text-bold d-flex align-items-center">
                    <input type="checkbox" value="" style={{ width: "20px", height: "20px" }} class="mr-1" />
                    Remember me
                  </label>
                </div>
              </div>

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
                  onClick={handleLogin}
                >
                  Login
                </button>
              )}
            </form>
            <div class="p-2">
              <span class="text-primary">Don't have an Account ? </span>
              <Link to="/register">
                <span class="text-dark text-bold pl-2">Sign Up here</span>
              </Link>
              <p class="text-primary mt-2">
                Forgot ?
                <Link to="/forgot-password" class="text-dark text-bold">
                  <span class="text-dark text-bold ml-2">Password </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
