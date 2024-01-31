import { 
    CREATE_LIKE_REQUEST,
    CREATE_LIKE_SUCCESS ,
    CREATE_LIKE_FAIL } from "../actions/types";

export const createLikeReducer = (state = {}, action) => {

    switch (action.type) {
        case CREATE_LIKE_REQUEST:
            
            return { loadingLike: true };

        case CREATE_LIKE_SUCCESS:
            return {
                loadingLike: false,
                success: "successfull created",
                Response: action.payload,
            }
        case CREATE_LIKE_FAIL:
            return {
                loadingLike: false,
                error: action.payload
            }
        default:
            return state
    }
}