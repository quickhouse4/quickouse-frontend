import {
    CASHIN_REQUEST,
    CASHIN_SUCCESS,
    CASHIN_FAIL,
    CASHOUT_SUCCESS,
    CASHOUT_REQUEST,
    CASHOUT_FAIL,
    PUBLISH_PROPERTY_SUCCESS,
    CHECK_PAYMENT_STATUS_REQUEST,
    CHECK_PAYMENT_STATUS_SUCCESS,
    CHECK_PAYMENT_STATUS_FAIL
} from "./types";
import axios from "axios";

export const cashinRequest = (payload, token) => async (dispatch) => {
    try {
        dispatch({
            type: CASHIN_REQUEST,
        });
        const response = await axios.post('http://localhost:5000/api/cashin', payload, {
            headers: {
                token: token,
            }
        });
        const data = response.data.data;
        dispatch({
            type: CASHIN_SUCCESS,
            payload: response.data.data
        });
        // history.push(`/success/${response.data.data._id}`);
        // window.location.reload();
        return data
    } catch (error) {
        dispatch({
            type: CASHIN_FAIL,
            payload: error,
        });
    }
}

export const cashoutRequest = (payload, token) => async (dispatch) => {
    try {
        dispatch({
            type: CASHOUT_REQUEST,
        });
        const response = await axios.post('http://localhost:5000/api/cashout', payload, {
            headers: {
                token: token,
            }
        });
        
        dispatch({
            type: CASHOUT_SUCCESS,
            payload: response.data.data
        });
    } catch (error) {
        dispatch({
            type: CASHOUT_FAIL,
            payload: error,
        });
    }
}

export const addPropertyToPublish = (propertyData, history) => {
    return dispatch => {
        dispatch({
            type: PUBLISH_PROPERTY_SUCCESS,
            payload: propertyData
        });
        history.push('/payment');
    };
};

export const paymentStatusAction = (id) => async (dispatch) => {
    
    try {
        dispatch({
            type: CHECK_PAYMENT_STATUS_REQUEST,
        });
        const response = await axios.get(`http://localhost:5000/api/checkpaymentstatus/${id}`);
        dispatch({
            type: CHECK_PAYMENT_STATUS_SUCCESS,
            payload: response.data
        });
        return response.data
    } catch (error) {
        dispatch({
            type: CHECK_PAYMENT_STATUS_FAIL,
            payload: error,
        });
    }
}

