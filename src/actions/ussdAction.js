import {
    GET_USSD_REQUEST,
    GET_USSD_SUCCESS,
    GET_USSD_FAIL,
    GET_ONEUSSD_REQUEST,
    GET_ONEUSSD_SUCCESS,
    GET_ONEUSSD_FAIL,
    FILTER_OFFER_REQUEST,
    FILTER_OFFER_FAIL,
    FILTER_OFFER_SUCCESS,
    FILTER_OFFER_SALE_REQUEST,
    FILTER_OFFER_SALE_FAIL,
    FILTER_OFFER_SALE_SUCCESS,
    FILTER_REQUEST_REQUEST,
    FILTER_REQUEST_FAIL,
    FILTER_REQUEST_SUCCESS,
    FILTER_REQUEST_SALE_REQUEST,
    FILTER_REQUEST_SALE_FAIL,
    FILTER_REQUEST_SALE_SUCCESS,
    GET_APP_MESSAGE_REQUEST,
    GET_APP_MESSAGE_SUCCESS,
    GET_APP_MESSAGE_FAIL,
    GET_DETAILS_MESSAGE_REQUEST,
    GET_DETAILS_MESSAGE_SUCCESS,
    GET_DETAILS_MESSAGE_FAIL
} from "./types";
import axios from "axios";

export const getClientUssd = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_USSD_REQUEST
        })
        const response = await axios.get("https://quickhouse.herokuapp.com/ussdProperties?page=1&limit=10")
        dispatch({
            type: GET_USSD_SUCCESS,
            payload: response.data.data.docs
        })
    } catch (error) {
        dispatch({
            type: GET_USSD_FAIL
        })
    }
}


export const getSingleUssd = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_ONEUSSD_REQUEST
        })
        const response = await axios.get(`https://quickhouse.herokuapp.com/ussd/${id}`,)
        dispatch({
            type: GET_ONEUSSD_SUCCESS,
            payload: response.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_ONEUSSD_FAIL,
            payload: error
        })
    }
}

export const offersFilter = (pageCount, pageLimit) => async (dispatch) => {

    try {
        dispatch({
            type: FILTER_OFFER_REQUEST
        });

        const response = await axios.get(
            `https://quickhouse.herokuapp.com/api/ussdproperties/rent/offer?page=${pageCount}&limit=${pageLimit}`
        );
        dispatch({
            type: FILTER_OFFER_SUCCESS,
            payload: response.data.data.docs,
            totalDocs: response.data.data.totalDocs,
            limit: response.data.data.limit,
            page: response.data.data.page,
            totalPagesforRent: response.data.data.totalPages,
        });
    } catch (error) {
        dispatch({

            type: FILTER_OFFER_FAIL,
            payload: error
        });
    }
};


export const offersSaleFilter = (pageCount, pageLimit) => async (dispatch) => {
    try {
        dispatch({
            type: FILTER_OFFER_SALE_REQUEST
        });

        const response = await axios.get(
            `https://quickhouse.herokuapp.com/api/ussdproperties/sales/offer?page=${pageCount}&limit=${pageLimit}`
        );

        dispatch({
            type: FILTER_OFFER_SALE_SUCCESS,
            payload: response.data.data.docs,
            totalDocs: response.data.data.totalDocs,
            limit: response.data.data.limit,
            page: response.data.data.page,
            totalPagesforSale: response.data.data.totalPages,
        });
    } catch (error) {
        dispatch({
            type: FILTER_OFFER_SALE_FAIL,
            payload: error
        });
    }
};

export const requestFilter = (pageCount, pageLimit) => async (dispatch) => {

    try {
        dispatch({
            type: FILTER_REQUEST_REQUEST
        });

        const response = await axios.get(
            `https://quickhouse.herokuapp.com/api/ussdproperties/rent/request?page=${pageCount}&limit=${pageLimit}`
        );
        dispatch({
            type: FILTER_REQUEST_SUCCESS,
            payload: response.data.data.docs,
            totalDocs: response.data.data.totalDocs,
            limit: response.data.data.limit,
            page: response.data.data.page,
            totalPagesforRent: response.data.data.totalPages,
        });
    } catch (error) {
        dispatch({
            type: FILTER_REQUEST_FAIL,
            payload: error
        });
    }
};

export const requestSaleFilter = (pageCount, pageLimit) => async (dispatch) => {
    try {
        dispatch({
            type: FILTER_REQUEST_SALE_REQUEST
        });

        const response = await axios.get(
            `https://quickhouse.herokuapp.com/api/ussdproperties/sales/request?page=${pageCount}&limit=${pageLimit}`
        );
       
        dispatch({
            type: FILTER_REQUEST_SALE_SUCCESS,
            payload: response.data.data.docs,
            totalDocs: response.data.data.totalDocs,
            limit: response.data.data.limit,
            page: response.data.data.page,
            totalPagesforSale: response.data.data.totalPages,
        });
    } catch (error) {
        dispatch({
            type: FILTER_REQUEST_SALE_FAIL,
            payload: error
        });
    }
};

export const getAppMessage = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_APP_MESSAGE_REQUEST
        })
        const response = await axios.get("https://quickhouse.herokuapp.com/api/orders")
        console.log(response.data.data)
        dispatch({
            type: GET_APP_MESSAGE_SUCCESS,
            payload: response.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_APP_MESSAGE_FAIL
        })
    }
}

export const getDetailsMessage = (id) => async (dispatch) => {
    try{
        dispatch({
            type: GET_DETAILS_MESSAGE_REQUEST
        })
        const response = await axios.get(`https://quickhouse.herokuapp.com/api/order/${id}`)
        dispatch({
            type: GET_DETAILS_MESSAGE_SUCCESS,
            payload: response.data.data
        })
    }catch(error){
        dispatch({
            type: GET_DETAILS_MESSAGE_FAIL
        })
    }
}