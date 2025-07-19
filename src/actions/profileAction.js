import {
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAIL
} from "./types";
import axios from "axios";

export const getProfile = (token) => async (dispatch) => {
    try {
        dispatch({
            type: GET_PROFILE_REQUEST
        })
        const response = await axios.get(
            `https://quickhouse-436caeb406a0.herokuapp.com/api/myProfile`,
            {
                headers: {
                    token: token,
                },
            })
    
        dispatch({
            type: GET_PROFILE_SUCCESS,
            payload: response.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_PROFILE_FAIL,
            payload: error
        })
    }
}