import {
    DEAL_REQUEST,
    DEAL_SUCCESS,
    DEAL_FAIL,
    CREATE_DEAL_REQUEST,
    CREATE_DEAL_SUCCESS,
    CREATE_DEAL_FAIL,
    DEAL_DETAIL_REQUEST,
    DEAL_DETAIL_SUCCESS,
    DEAL_DETAIL_FAIL,
    MY_DEAL_REQUEST,
    MY_DEAL_SUCCESS,
    MY_DEAL_FAIL
} from "../actions/types";
import axios from "axios";

export const createDeal = (payload, token, history) => async (dispatch) => {
    try {
        dispatch({
            type: CREATE_DEAL_REQUEST
        })

        const response = await axios.post("http://197.243.26.162/api/order",
            payload,
            {
                headers: {
                    token: token,
                }
            }
        )
        dispatch({
            type: CREATE_DEAL_SUCCESS,
            payload: response.data.data
        })

        // history.push(`/dealProperty/${response.data.data._id}`)
        history.push(`/detailsMessage/${response.data.data._id}`)
        window.location.reload();
    } catch (error) {
        console.log("error", error);
        dispatch({
            type: CREATE_DEAL_FAIL,
            payload: error,
        })
    }
}

export const getDeals = () => async (dispatch) => {
    try {
        dispatch({
            type: DEAL_REQUEST
        })
        const response = await axios.get(`http://197.243.26.162/api/deals?page=1&limit=25`)
        dispatch({
            type: DEAL_SUCCESS,
            payload: response.data.data.docs,
            // page: response.data.data.page,
            // limit:response.data.data.limit
        })

    } catch (error) {
        dispatch({
            type: DEAL_FAIL,
            payload: error
        })
    }
}
export const getSingleDeal = (id) => async (dispatch) => {
    try {
        dispatch({
            type: DEAL_DETAIL_REQUEST
        })
        const response = await axios.get(`http://197.243.26.162/api/deal/${id}`,)
        dispatch({
            type: DEAL_DETAIL_SUCCESS,
            payload: response.data.data
        })
    } catch (error) {
        dispatch({
            type: DEAL_DETAIL_FAIL,
            payload: error
        })
    }
}

export const personDeal = (requesterId, token) => async (dispatch) => {
    try {
        dispatch({
            type: MY_DEAL_REQUEST
        })
        const response = await axios.get(`http://197.243.26.162/api/myDeals?page=1&limit=10&requesterId=${requesterId}`, {
            headers: {
                token: token
            }
        })
        dispatch({
            type: MY_DEAL_SUCCESS,
            payload: response.data.data.docs
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: MY_DEAL_FAIL,
            payload: error
        })
    }
}
