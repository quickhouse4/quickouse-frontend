import {
    CASHIN_FAIL,
    CASHIN_REQUEST,
    CASHIN_SUCCESS,
    CASHOUT_FAIL,
    CASHOUT_REQUEST,
    CASHOUT_SUCCESS,
    PUBLISH_PROPERTY_REQUEST,
    PUBLISH_PROPERTY_SUCCESS,
    PUBLISH_PROPERTY_FAIL,
    CHECK_PAYMENT_STATUS_REQUEST,
    CHECK_PAYMENT_STATUS_SUCCESS,
    CHECK_PAYMENT_STATUS_FAIL,
    REVENUE_REQUEST,
    REVENUE_SUCCESS,
    REVENUE_FAIL,
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
} from "../actions/types";

export const cashinReducer = (state = {}, action) => {
    switch (action.type) {
        case CASHIN_REQUEST:
            return { loading: true };
        case CASHIN_SUCCESS:
            return { loading: false, success: "successfull paid", Response: action.payload };
        case CASHIN_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const cashoutReducer = (state = {}, action) => {
    switch (action.type) {
        case CASHOUT_REQUEST:
            return { loadingCashout: true };
        case CASHOUT_SUCCESS:
            return { loadingCashout: false, success: "successfull paid", Response: action.payload }
        case CASHOUT_FAIL:
            return { loadingCashout: false, error: action.payload };
        default:
            return state;
    }
}

export const publishedPropertyReducer = (state = { publishProperty: [] }, action) => {
    switch (action.type) {
        case PUBLISH_PROPERTY_REQUEST:
            return { pubLoading: true, publishProperty: [] }
        case PUBLISH_PROPERTY_SUCCESS:
            return {
                pubLoading: false,
                ...state,
                publishProperty: [...state.publishProperty, action.payload]
            }
        case PUBLISH_PROPERTY_FAIL:
            return { pubLoading: false, error: action.payload }
        default:
            return state;
    }
}

export const checkPaymentStatusReducer = (state = { paymentStatus: [] }, action) => {
    switch (action.type) {
        case CHECK_PAYMENT_STATUS_REQUEST:
            return {
                loading: true,
                paymentStatus: []
            };
        case CHECK_PAYMENT_STATUS_SUCCESS:
            console.log("action.payload", action.payload)
            return {
                loading: false,
                paymentStatus: action.payload
            }
        case CHECK_PAYMENT_STATUS_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}
export const revenueReducer = (state = { revenue: [] }, action) => {
    switch (action.type) {
        case REVENUE_REQUEST:
            return { loading: true, revenue: [] };
        case REVENUE_SUCCESS:
            return { loading: false, revenue: action.payload };
        case REVENUE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const getUserPaymentReducer = (state = { userPayment: [] }, action) => {
    switch (action.type) {
        case GET_USER_PAYMENT_REQUEST:
            return { loading: true, userPayment: [] };
        case GET_USER_PAYMENT_SUCCESS:
            return { loading: false, userPayment: action.payload };
        case GET_USER_PAYMENT_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const expenseReducer = (state = { expense: [] }, action) => {
    switch (action.type) {
        case EXPENSE_REQUEST:
            return { loading: true, expense: [] };
        case EXPENSE_SUCCESS:
            return { loading: false, expense: action.payload };
        case EXPENSE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const getUserRevenueReducer = (state = { userRevenue: [] }, action) => {
    switch (action.type) {
        case GET_USER_REVENUE_REQUEST:
            return { loading: true, userRevenue: [] };
        case GET_USER_REVENUE_SUCCESS:
            return { loading: false, userRevenue: action.payload };
        case GET_USER_REVENUE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const getTransactionsReducer = (state = { transactions: [] }, action) => {
    switch (action.type) {
        case GET_TRANSACTION_REQUEST:
            return { loading: true, transactions: [] };
        case GET_TRANSACTION_SUCCESS:
            return { loading: false, transactions: action.payload };
        case GET_TRANSACTION_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const getUserExepenseReducer = (state = { userExpense: [] }, action) => {
    switch (action.type) {
        case GET_USER_EXPENSES_REQUEST:
            return { loading: true, userExpense: [] };
        case GET_USER_EXPENSES_SUCCESS:
            return { loading: false, userExpense: action.payload };
        case GET_USER_EXPENSES_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
