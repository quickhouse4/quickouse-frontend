import {
    CASHIN_FAIL,
    CASHIN_REQUEST,
    CASHIN_SUCCESS,
    CASHOUT_FAIL,
    CASHOUT_REQUEST,
    CASHOUT_SUCCESS,
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
