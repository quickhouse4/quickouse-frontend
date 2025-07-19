import {
  USER_LOGIN,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  GET_USER_REQUEST,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  ALL_USER_REQUEST,
  ALL_USER_SUCCESS,
  ALL_USER_FAIL,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_REQUEST,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_REQUEST,
  DELETE_USER_FAIL,
  UPDATE_ROLE_REQUEST,
  UPDATE_ROLE_SUCCESS,
  UPDATE_ROLE_FAIL,
  UPDATE_USER_ROLE
} from "../actions/types";
import { useHistory } from "react-router-dom";

import axios from "axios";

export const userLogin = (payload) => async (dispatch) => {
  const history = useHistory()
  try {
    const response = axios
      .post("https://quickhouse-436caeb406a0.herokuapp.com/api/auth/signin", payload)
      .then(function (res) {
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("email", res.data.data.userData.email);
        history.push("/Dashboard", payload);
      })
      .catch(function (error) {
        console.log("Error response: ", error);

        // setTimeout(() => setAlert(true), 1000);

        history.push("/login", payload);
      });

    dispatch({ type: USER_LOGIN, payload: response.data.data.docs });
  } catch (error) {
    return error;
  }
};

export const updateProfile = (payload, token, history) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_PROFILE_REQUEST
    });
    const response = await axios.patch("https://quickhouse-436caeb406a0.herokuapp.com/api/update/myProfile",
      payload,
      {
        headers: {
          token: token,
        },
      })
    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: response.data.data
    })
    history.push('/profile');
    window.location.reload();
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error
    })
  }
}

export const getOneUser = (id, token) => async (dispatch) => {
  try {
    dispatch({
      type: GET_USER_REQUEST
    })
    const response = await axios.get(`https://quickhouse-436caeb406a0.herokuapp.com/api/oneUser/${id}`, {
      headers: {
        token
      }
    })

    dispatch({
      type: GET_USER_SUCCESS,
      payload: response.data.data
    })
  } catch (error) {
    dispatch({
      type: GET_USER_FAIL,
      payload: error
    })
  }
}

export const getAllUser = (token, page, limit) => async (dispatch) => {
  try {
    dispatch({
      type: ALL_USER_REQUEST
    })

    const response = await axios.get(`https://quickhouse-436caeb406a0.herokuapp.com/api/allUsers?page=${page}}&limit=${limit}`, {
      headers: {
        token: token
      }
    })

    dispatch({
      type: ALL_USER_SUCCESS,
      payload: response.data.data.docs,
      limit: response.data.data.limit,
      page: response.data.data.page,
      totalPages: response.data.data.totalPages
    })
  } catch (error) {
    dispatch({
      type: ALL_USER_FAIL,
      payload: error
    })
  }
}

export const userForgotPassword = (payload) => async (dispatch) => {

  try {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST
    })
    const config = {
      headers: {
        'Content-Type': 'application/json',
      }
    };

    const response = await axios.post("https://quickhouse-436caeb406a0.herokuapp.com/api/forgotPassword",
      payload,
      config
    )

    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: response.data.data
    })
  } catch (error) {

    dispatch({
      type: FORGOT_PASSWORD_FAIL
    })
  }
}

export const resetUserPassword = (token, payload) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_PASSWORD_REQUEST
    })

    const response = await axios.put(`https://quickhouse-436caeb406a0.herokuapp.com/api/reset/${token}`, payload)
    console.log(response.data)

    dispatch({
      type: RESET_PASSWORD_SUCCESS,
      payload: response.data
    })

  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload: error
    })
  }
}

export const deletedUser = (id, token) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_USER_REQUEST
    })
    const response = await axios.delete(`https://quickhouse-436caeb406a0.herokuapp.com/api/deleteUser/${id}`, {
      headers: {
        token: token
      }
    })
    
    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: response.data
    })
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error
    })
  }
}

export const userRoleUpdate = (id, payload, token ,history) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_ROLE_REQUEST
    })
    const response = await axios.put(`https://quickhouse-436caeb406a0.herokuapp.com/api/userRole/${id}`, payload, {
      headers: {
        token: token,
      }
    })

    dispatch({
      type: UPDATE_USER_ROLE,
      payload: response.data.role
    })
    history.push('/allUser');
    window.location.reload();
  } catch (error) {
    dispatch({
      type: UPDATE_ROLE_FAIL,
      payload: error
    })
  }
}
