import React, { useState } from 'react'
import { updateProfile } from '../actions/userAction'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'


const UpdateModel = () => {

    const profile = useSelector((state) => state.userUpdate)
    const { loading } = profile
    const [address1, setAddress1] = useState({});
    const [address2, setAddress2] = useState({});
    const [city, setCity] = useState({});
    const [country, setCountry] = useState({});
    const [phoneNumber, setPhoneNumber] = useState({})
    const [profilePhoto, setProfilePhoto] = useState({});
    const dispatch = useDispatch()
    const history = useHistory()
    let token = localStorage.getItem("token");

    const onAddress1Change = (e) => {
        var em = e.target.value;
        if (em != "") {
            setAddress1({ value: em });
        } else {
            setAddress1({ value: em, message: "Write Address1" });
        }
    };
    const onAddress2Change = (e) => {
        var em = e.target.value;
        if (em != "") {
            setAddress2({ value: em });
        } else {
            setAddress2({ value: em, message: "Write Address2" });
        }
    };
    const onCityChange = (e) => {
        var em = e.target.value;
        if (em != "") {
            setCity({ value: em });
        } else {
            setCity({ value: em, message: "Write City" });
        }
    };
    const onPhoneNumber = (e) => {
        var em = e.target.value
        if (em != "") {
            setPhoneNumber({ value: em })
        } else {
            setPhoneNumber({ value: em, message: "Write phoneNumber" })
        }
    }
    const onCountryChange = (e) => {
        var em = e.target.value;
        if (em != "") {
            setCountry({ value: em });
        } else {
            setCountry({ value: em, message: "Write City" });
        }
    };
    const onFileChange = (e) => {
        var em = e.target.files[0];
        if (em != "") {
            setProfilePhoto({ value: em });
        } else {
            setProfilePhoto({ value: em, message: "Upload profile photo" });
        }
    };

    const changeProfile = async (e) => {
        e.preventDefault();
        const formData = new FormData()

        formData.append("profilePhoto", profilePhoto.value)
        formData.append("address1", address1.value)
        formData.append("address2", address2.value)
        formData.append("city", city.value)
        formData.append("country", country.value)
        formData.append("phoneNumber", phoneNumber.value)
        for (const pair of formData.entries()) {
            console.log(`${pair[0]}, ${pair[1]}`);
        }
        dispatch(updateProfile(formData, token, history))
    }
    return (
        <div >
            <div class="modal fade" id="myModal" >
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <h4 class="modal-title text-center mt-2 fw-bold">Update Profile</h4>
                        <form class="ml-1 mr-1">
                            <div class="form-group">
                                <label class="">Profile Image</label>
                                <div class="file-drop-area">
                                    <input type="file" onChange={onFileChange} name="profilePhoto" />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="">
                                            address1
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="address"
                                            name="address1"
                                            onChange={onAddress1Change}
                                        />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="sel1" class="">
                                            address2
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="usr"
                                            name="address2"
                                            onChange={onAddress2Change}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="">
                                            Country
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="usr"
                                            name="country"
                                            onChange={onCountryChange}
                                        />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label htmlFor="sel1" class="">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="usr"
                                            name="city"
                                            onChange={onCityChange}
                                        />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label htmlFor="sel1" class="">
                                            PhoneNumber
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="usr"
                                            name="phoneNumber"
                                            onChange={onPhoneNumber}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                {loading ? (
                                    <button
                                        class="btn btn-block  login-btn"
                                        type="button"
                                        disabled
                                    >
                                        <span
                                            class="spinner-grow spinner-grow-sm"
                                            role="status"
                                            aria-hidden="true"
                                        ></span>
                                        Loading...
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        class="btn login-btn btn-lg btn-block"
                                        onClick={changeProfile}
                                    >
                                        Update
                                    </button>
                                )}
                            </div>
                        </form>
                        <div class="modal-footer">
                            <button type="button" class="btn login-btn" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateModel