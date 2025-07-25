import axios from "axios";
import {
    CREATE_LIKE_REQUEST,
    CREATE_LIKE_SUCCESS,
    CREATE_LIKE_FAIL,
} from "./types";

export const createLike = (id, token) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_LIKE_REQUEST })
        const response = await axios.get(`https://quickhouse-436caeb406a0.herokuapp.com/api/likeProperty/${id}`,
            {
                headers: {
                    token: token,
                },
            }
        )
        dispatch({
            type: CREATE_LIKE_SUCCESS,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: CREATE_LIKE_FAIL,
            payload: error
        })
    }

}

