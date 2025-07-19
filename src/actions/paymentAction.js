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
    CHECK_PAYMENT_STATUS_FAIL,
    REVENUE_REQUEST,
    REVENUE_SUCCESS,
    GET_USER_PAYMENT_REQUEST,
    GET_USER_PAYMENT_SUCCESS,
    GET_USER_PAYMENT_FAIL,
    EXPENSE_REQUEST,
    EXPENSE_SUCCESS,
    EXPENSE_FAIL,
    GET_USER_REVENUE_SUCCESS,
    GET_USER_REVENUE_REQUEST,
    GET_USER_REVENUE_FAIL,
    GET_TRANSACTION_REQUEST,
    GET_TRANSACTION_FAIL,
    GET_TRANSACTION_SUCCESS,
    GET_USER_EXPENSES_REQUEST,
    GET_USER_EXPENSES_SUCCESS,
    GET_USER_EXPENSES_FAIL,
} from "./types";
import axios from "axios";

export const cashinRequest = (payload, token) => async (dispatch) => {
    
    try {
        dispatch({
            type: CASHIN_REQUEST,
        });
        //https://quickhouse-436caeb406a0.herokuapp.com/api
        const response = await axios.post('https://quickhouse-436caeb406a0.herokuapp.com/api/cashin', payload, {
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
        const response = await axios.post('https://quickhouse-436caeb406a0.herokuapp.com/api/cashout', payload, {
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
        const response = await axios.get(`https://quickhouse-436caeb406a0.herokuapp.com/api/checkpaymentstatus/${id}`);
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

export const revenueAction = (token) => async (dispatch) => {
    try {
        dispatch({
            type: REVENUE_REQUEST,
        });
        const response = await axios.get('https://quickhouse-436caeb406a0.herokuapp.com/api/getallpayments', {
            headers: {
                token: token,
            }
        });
        dispatch({
            type: REVENUE_SUCCESS,
            payload: response.data.data
        });

    } catch (error) {
        dispatch({
            type: CASHIN_FAIL,
            payload: error,
        });
    }
}

export const userAmountAction = (token) => async (dispatch) => {
    try {
        dispatch({
            type: GET_USER_PAYMENT_REQUEST,
        });
        const response = await axios.get('https://quickhouse-436caeb406a0.herokuapp.com/api/getuserpayment', {
            headers: {
                token: token,
            }
        });
        dispatch({
            type: GET_USER_PAYMENT_SUCCESS,
            payload: response.data.data
        });

    } catch (error) {
        dispatch({
            type: GET_USER_PAYMENT_FAIL,
            payload: error,
        });
    }
}

export const expenseAction = (token) => async (dispatch) => {
    try {
        dispatch({
            type: EXPENSE_REQUEST,
        });
        const response = await axios.get('https://quickhouse-436caeb406a0.herokuapp.com/api/getAllExpense', {
            headers: {
                token: token,
            }
        });

        dispatch({
            type: EXPENSE_SUCCESS,
            payload: response.data.data
        });
    } catch (error) {
        dispatch({
            type: EXPENSE_FAIL,
            payload: error,
        });
    }
}

export const userRevenueAction = (token) => async (dispatch) => {
    try {
        dispatch({
            type: GET_USER_REVENUE_REQUEST,
        });
        const response = await axios.get('https://quickhouse-436caeb406a0.herokuapp.com/api/userRevenue', {
            headers: {
                token: token,
            }
        });

        dispatch({
            type: GET_USER_REVENUE_SUCCESS,
            payload: response.data.data
        });
    } catch (error) {
        dispatch({
            type: GET_USER_REVENUE_FAIL,
            payload: error,
        });
    }
}

export const getTransactionAction = (token) => async (dispatch) => {
    try {
        dispatch({
            type: GET_TRANSACTION_REQUEST,
        });
        const response = await axios.get('https://quickhouse-436caeb406a0.herokuapp.com/api/transactions', {
            headers: {
                token: token,
            }
        });
        dispatch({
            type: GET_TRANSACTION_SUCCESS,
            payload: response.data.data
        });
    } catch (error) {
        dispatch({
            type: GET_TRANSACTION_FAIL,
            payload: error,
        });
    }
}

export const getUserExpense = (token) => async (dispatch) => {
    try {
        dispatch({
            type: GET_USER_EXPENSES_REQUEST,
        });
        const response = await axios.get('https://quickhouse-436caeb406a0.herokuapp.com/api/eachUserExpenses', {
            headers: {
                token: token,
            }
        })

        dispatch({
            type: GET_USER_EXPENSES_SUCCESS,
            payload: response.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_USER_EXPENSES_FAIL,
            payload: error,
        })
    }
}
