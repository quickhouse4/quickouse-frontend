import {
    CASHIN_FAIL,
    CASHIN_REQUEST,
    CASHIN_SUCCESS,
    CASHOUT_FAIL,
    CASHOUT_REQUEST,
    CASHOUT_SUCCESS,
    PUBLISH_PROPERTY_REQUEST,
    PUBLISH_PROPERTY_SUCCESS ,
    PUBLISH_PROPERTY_FAIL,
    CHECK_PAYMENT_STATUS_REQUEST,
    CHECK_PAYMENT_STATUS_SUCCESS,
    CHECK_PAYMENT_STATUS_FAIL
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

export const cashoutReducer = (state = { }, action) => {
    switch (action.type) {
        case CASHOUT_REQUEST:
            return { loading: true};
        case CASHOUT_SUCCESS:
            return { loading: false, success: "successfull paid", Response: action.payload }
        case CASHOUT_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const publishedPropertyReducer = (state = { publishProperty : [] }, action) => {
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

export const checkPaymentStatusReducer = (state = { paymentStatus:[] }, action) => {
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