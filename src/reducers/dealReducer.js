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

export const createDealReducer = (state = {}, action) => {

    switch (action.type) {
        case CREATE_DEAL_REQUEST:
            
            return { loading: true };

        case CREATE_DEAL_SUCCESS:
            
            return {
                loading: false,
                success: "successfull created",
                Response: action.payload,
            }
        case CREATE_DEAL_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const dealListReducer = (state = { deal: [] }, action) => {
    switch (action.type) {

        case DEAL_REQUEST:
            return {
                loading: true,
                deal: []
            };

        case DEAL_SUCCESS:
            return {
                loading: false,
                deal: action.payload,
                limit: action.limit,
                page: action.page,
            };

        case DEAL_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export const getOneDealReducer = (state = { dealDetail: [] }, action) => {
    switch (action.type) {

        case DEAL_DETAIL_REQUEST:
            return {
                loading: true,
                dealDetail: []
            }
        case DEAL_DETAIL_SUCCESS:
            return {
                loading: false,
                dealDetail: action.payload
            }
        case DEAL_DETAIL_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }

}

export const MyDealReducer = (state = { myPosts: [] }, action) => {
    switch (action.type) {
        case MY_DEAL_REQUEST:
            return {
                loading: true
            }
        case MY_DEAL_SUCCESS:
            return {
                loading: false,
                myPosts: action.payload,
                limit: action.limit,
                page: action.page,
            }

        case MY_DEAL_FAIL:
            return {
                loading: false,
                error : action.payload
            }

        default:
            return state

    }
}
