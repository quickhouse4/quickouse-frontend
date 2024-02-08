import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Sidebar from "./Sidebar";
import Header from "../components/Header";
import UpdateModel from "./UpdateModel";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../actions/profileAction";

function Profile() {
  let token = localStorage.getItem("token");
  const userProfile = useSelector((state) => state.getProfile)
  const dispatch = useDispatch()
  const { profile } = userProfile
  const [label, setLabel] = useState('');

  useEffect(() => {
    dispatch(getProfile(token))
  }, [])

  return (
    <>
      <Header setLabel={setLabel} />

      <div class="w-100 pt-2">
        <div class="d-flex position-relative flex-nowrap">
          <Sidebar />
          <div class="col-md-10 col-xl-10 pb-3" style={{ marginTop: "120px" }}>
            {/* <div class="row">
              <div class="col-md-12"> */}
            <div class="card">
              <div class="card-header">Profile</div>
              <img
                src={profile && profile.profilePhotoUrl ? profile.profilePhotoUrl : "https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"}
                class="pt-2 rounded-circle"
                alt="Card image cap"
                width="200px"
                height="200px"
                style={{
                  margin: "auto",
                }}
              />
              <div class="card-body">
                <form>
                  <div class="form-row">
                    <div class="col-md-6">
                      <label class="text-bold">Firstname</label>

                      <input
                        class="form-control"
                        value={profile && profile.lastname}
                        disabled
                        top-border
                      />
                    </div>
                    <div class="col-md-6">
                      <label class="text-bold">Lastname</label>

                      <input
                        class="form-control"
                        value={profile && profile.firstname}
                        disabled
                      />
                    </div>

                    <div class="col-md-6">
                      <label class="text-bold">Email</label>

                      <input
                        class="form-control"
                        value={profile && profile.email}
                        disabled
                        top-border
                      />
                    </div>
                    <div class="col-md-6">
                      <label class="text-bold">PhoneNumber</label>

                      <input
                        class="form-control"
                        value={`0${profile && profile.phoneNumber}`}
                        disabled
                      />
                    </div>

                    <div class="col-md-6">
                      <label class="text-bold">Address 1</label>

                      <input
                        class="form-control"
                        value={profile && profile.address1}
                        disabled
                        top-border
                      />
                    </div>
                    <div class="col-md-6">
                      <label class="text-bold">Address 2</label>

                      <input
                        class="form-control"
                        value={profile && profile.address2}
                        disabled
                      />
                    </div>

                    <div class="col-md-6">
                      <label class="text-bold">City</label>

                      <input
                        class="form-control"
                        value={profile && profile.city}
                        disabled
                        top-border
                      />
                    </div>
                    <div class="col-md-6">
                      <label class="text-bold">Country</label>

                      <input
                        class="form-control"
                        value={profile && profile.country}
                        disabled
                      />
                    </div>

                  </div>
                  <div class="form-groupe mt-5">
                    <button
                      type="button"
                      class="btn login-btn btn-lg btn-block"
                      data-toggle="modal"
                      data-target="#myModal">Change Profile</button>
                  </div>
                </form>
              </div>
            </div>
            {/* </div>
            </div> */}
            {/* <div class="row"></div> */}
          </div>
        </div>
        <UpdateModel />
      </div>

      <Footer />
    </>
  );
}

export default Profile;
