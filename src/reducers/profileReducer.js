import {
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAIL
} from "../actions/types";


export const getProfileReducer = (state = { profile: [] }, action) => {
    switch (action.type) {
        case GET_PROFILE_REQUEST:
            return { profileLoading: true, profile: [] }
        case GET_PROFILE_SUCCESS:
            return { profileLoading: false, profile: action.payload };
        case GET_PROFILE_FAIL:
            return { profileLoading: false, profile: action.payload }
        default:
            return state;
    }
}