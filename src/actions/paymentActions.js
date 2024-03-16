import {
    CASHIN_REQUEST,
    CASHIN_SUCCESS,
    CASHIN_FAIL,
    CASHOUT_SUCCESS,
    CASHOUT_REQUEST,
    CASHOUT_FAIL,
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
        dispatch({
            type: CASHIN_SUCCESS,
            payload: response.data.data
        });

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
        const response = await axios.post('http://localhost:5000/api/cashout',payload, {
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
