import axios from "axios";
import {
    GET_ANALYTICS_REQUEST,
    GET_ANALYTICS_SUCCESS,
    GET_ANALYTICS_FAIL,
    GET_LIKE_ANALYTICS_REQUEST,
    GET_LIKE_ANALYTICS_SUCCESS,
    GET_LIKE_ANALYTICS_FAIL,
    LIKE_NUMBER_REQUEST,
    LIKE_NUMBER_SUCCESS,
    LIKE_NUMBER_FAIL,
    VIEWS_NUMBER_REQUEST,
    VIEWS_NUMBER_SUCCESS,
    VIEWS_NUMBER_FAIL,
    POST_NUMBER_REQUEST,
    POST_NUMBER_SUCCESS,
    POST_NUMBER_FAIL,
    PLOT_NUMBER_REQUEST,
    PLOT_NUMBER_SUCCESS,
    PLOT_NUMBER_FAIL,
    RENT_NUMBER_REQUEST,
    RENT_NUMBER_SUCCESS,
    RENT_NUMBER_FAIL,
    HOUSE_NUMBER_REQUEST,
    HOUSE_NUMBER_SUCCESS,
    HOUSE_NUMBER_FAIL,
    SALE_NUMBER_REQUEST,
    SALE_NUMBER_SUCCESS,
    SALE_NUMBER_FAIL,
    GET_YEAR_VIEWS_REQUEST,
    GET_YEAR_VIEWS_SUCCESS,
    GET_YEAR_VIEWS_FAIL,
    GET_YEAR_LIKES_REQUEST,
    GET_YEAR_LIKES_SUCCESS,
    GET_YEAR_LIKES_FAIL,
    TOTAL_POST_REQUEST,
    TOTAL_POST_SUCCESS,
    TOTAL_POST_FAIL,
    TOTAL_VIEWS_REQUEST,
    TOTAL_VIEWS_SUCCESS,
    TOTAL_VIEWS_FAIL,
    VISITORS_TRACK_REQUEST,
    VISITORS_TRACK_SUCCESS,
    VISITORS_TRACK_FAIL,
    VISITOR_ANALYTIC_REQUEST,
    VISITOR_ANALYTIC_SUCCESS,
    VISITOR_ANALYTIC_FAIL,
    GET_TOTAL_VIEW_ANALYTIC_REQUEST,
    GET_TOTAL_VIEW_ANALYTIC_SUCCESS,
    GET_TOTAL_VIEW_ANALYTIC_FAIL,
    GET_TOTAL_LIKE_ANALYTIC_REQUEST,
    GET_TOTAL_LIKE_ANALYTIC_SUCCESS,
    GET_TOTAL_LIKE_ANALYTIC_FAIL
} from "./types";

export const getDataAnalytic = (token) => async (dispatch) => {
    try {
        dispatch({
            type: GET_ANALYTICS_REQUEST
        })
        const response = await axios.get("https://quickhouse.herokuapp.com/api/viewsAnalytics", {
            headers: {
                token: token
            }
        })

        dispatch({
            type: GET_ANALYTICS_SUCCESS,
            response: response.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_ANALYTICS_FAIL,
            payload: error
        })
    }
}

export const getYearViews = (token, year) => async (dispatch) => {
    try {
        dispatch({
            type: GET_YEAR_VIEWS_REQUEST
        })
        const response = await axios.get(`https://quickhouse.herokuapp.com/api/viewsAnalytics?yearData=${year}`, {
            headers: {
                token: token
            }
        })
        dispatch({
            type: GET_YEAR_VIEWS_SUCCESS,
            response: response.data.data
        })

    } catch (error) {
        dispatch({
            type: GET_YEAR_VIEWS_FAIL,
            payload: error
        })
    }
}

export const getYearLikes = (token, year) => async (dispatch) => {
    try {
        dispatch({
            type: GET_YEAR_LIKES_REQUEST
        })
        const response = await axios.get(`https://quickhouse.herokuapp.com/api/likes?yearData=${year}`, {
            headers: {
                token: token
            }
        })

        dispatch({
            type: GET_YEAR_LIKES_SUCCESS,
            response: response.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_YEAR_LIKES_FAIL,
            payload: error
        })
    }
}

export const getLikeAnalytic = (token) => async (dispatch) => {
    try {
        dispatch({
            type: GET_LIKE_ANALYTICS_REQUEST
        })
        const response = await axios.get("https://quickhouse.herokuapp.com/api/likes", {
            headers: {
                token: token
            }
        })

        dispatch({
            type: GET_LIKE_ANALYTICS_SUCCESS,
            response: response.data.data
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_LIKE_ANALYTICS_FAIL,
            payload: error
        })
    }
}
export const getPostNumber = (token) => async (dispatch) => {
    try {
        dispatch({
            type: POST_NUMBER_REQUEST
        })
        const response = await axios.get("https://quickhouse.herokuapp.com/api/myPosts", {
            headers: {
                token: token
            }
        })

        dispatch({
            type: POST_NUMBER_SUCCESS,
            response: response.data.data

        })
    } catch (error) {
        dispatch({
            type: POST_NUMBER_FAIL,
            response: error
        })
    }
}
export const getLikeNumber = (token) => async (dispatch) => {
    try {
        dispatch({
            type: LIKE_NUMBER_REQUEST
        })
        const response = await axios.get("https://quickhouse.herokuapp.com/api/allLikes", {
            headers: {
                token: token
            }
        })
        dispatch({
            type: LIKE_NUMBER_SUCCESS,
            response: response.data.data
        })
    } catch (error) {
        dispatch({
            type: LIKE_NUMBER_FAIL,
            payload: error
        })
    }
}
export const getViewsNumber = (token) => async (dispatch) => {
    try {
        dispatch({
            type: VIEWS_NUMBER_REQUEST
        })
        const response = await axios.get("https://quickhouse.herokuapp.com/api/myViews", {
            headers: {
                token: token
            }
        });
        dispatch({
            type: VIEWS_NUMBER_SUCCESS,
            response: response.data.data
        })
    } catch (error) {
        dispatch({
            type: VIEWS_NUMBER_FAIL,
            payload: error
        })
    }
}
export const getPlotNumber = (token) => async (dispatch) => {
    try {
        dispatch({
            type: PLOT_NUMBER_REQUEST
        })
        const response = await axios.get("https://quickhouse.herokuapp.com/api/posts/plot", {
            headers: {
                token: token
            }
        });

        dispatch({
            type: PLOT_NUMBER_SUCCESS,
            response: response.data.data.plotPosts
        })
    } catch (error) {
        dispatch({
            type: PLOT_NUMBER_FAIL,
            payload: error
        })
    }
}

export const getHouseNumber = (token) => async (dispatch) => {
    try {
        dispatch({
            type: HOUSE_NUMBER_REQUEST
        })
        const response = await axios.get("https://quickhouse.herokuapp.com/api/posts/house", {
            headers: {
                token: token
            }
        });

        dispatch({
            type: HOUSE_NUMBER_SUCCESS,
            response: response.data.data.housePosts
        })
    } catch (error) {
        dispatch({
            type: HOUSE_NUMBER_FAIL,
            payload: error
        })
    }
}

export const getRentPosts = (token) => async (dispatch) => {
    try {
        dispatch({
            type: RENT_NUMBER_REQUEST
        })
        const response = await axios.get("https://quickhouse.herokuapp.com/api/posts/forRent", {
            headers: {
                token: token
            }
        });

        dispatch({
            type: RENT_NUMBER_SUCCESS,
            response: response.data.data.rentPosts
        })
    } catch (error) {
        dispatch({
            type: RENT_NUMBER_FAIL,
            payload: error
        })
    }
}

export const getSalePosts = (token) => async (dispatch) => {
    try {
        dispatch({
            type: SALE_NUMBER_REQUEST
        })
        const response = await axios.get("https://quickhouse.herokuapp.com/api//posts/forSale", {
            headers: {
                token: token
            }
        });

        dispatch({
            type: SALE_NUMBER_SUCCESS,
            response: response.data.data.salePosts
        })
    } catch (error) {
        dispatch({
            type: SALE_NUMBER_FAIL,
            payload: error
        })
    }
}

export const getTotalPosts = (token) => async (dispatch) => {
    try {
        dispatch({
            type: TOTAL_POST_REQUEST
        })
        const response = await axios.get("https://quickhouse.herokuapp.com/api/posts", {
            headers: {
                token: token
            }
        });
        dispatch({
            type: TOTAL_POST_SUCCESS,
            response: response.data.data.activePosts
        })
    } catch (error) {
        dispatch({
            type: TOTAL_POST_FAIL,
            payload: error
        })
    }
}

export const getTotalViews = (token) => async (dispatch) => {
    try {
        dispatch({
            type: TOTAL_VIEWS_REQUEST
        })
        const response = await axios.get("https://quickhouse.herokuapp.com/api/totalViews", {
            headers: {
                token: token
            }
        });
        dispatch({
            type: TOTAL_VIEWS_SUCCESS,
            response: response.data.data
        })
    } catch (error) {
        dispatch({
            type: TOTAL_VIEWS_FAIL,
            payload: error
        })
    }
}

export const visitorsTrack = () => async (dispatch) => {
    try {
        dispatch({
            type: VISITORS_TRACK_REQUEST
        })
        const response = await axios.post("https://quickhouse.herokuapp.com/api/visits");
        dispatch({
            type: VISITORS_TRACK_SUCCESS,
            response: response.data.data
        })

    } catch (error) {
        dispatch({
            type: VISITORS_TRACK_FAIL,
            payload: error
        })
    }
}

export const getVisitorAnalytics = (token, year) => async (dispatch) => {
    try {
        dispatch({
            type: VISITOR_ANALYTIC_REQUEST
        })
        const response = await axios.get(`https://quickhouse.herokuapp.com/api/analyticsVisits?yearData=${year}`, {
            headers: {
                token: token
            }
        });
        dispatch({
            type: VISITOR_ANALYTIC_SUCCESS,
            response: response.data.data
        })
    } catch (error) {
        dispatch({
            type: VISITOR_ANALYTIC_FAIL,
            payload: error
        })
    }
}

export const getTotalViewAnalytics = (year) => async (dispatch) => {
    try {
        dispatch({
            type: GET_TOTAL_VIEW_ANALYTIC_REQUEST
        })
        const response = await axios.get(`https://quickhouse.herokuapp.com/api/totalAnalyticsViews?yearData=${year}`);
        dispatch({
            type: GET_TOTAL_VIEW_ANALYTIC_SUCCESS,
            response: response.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_TOTAL_VIEW_ANALYTIC_FAIL,
            payload: error
        })
    }
}

export const getTotalLikeAnalytics = (year) => async (dispatch) => {
    try {
        dispatch({
            type: GET_TOTAL_LIKE_ANALYTIC_REQUEST
        })
        const response = await axios.get(`https://quickhouse.herokuapp.com/api/totalAnalyticsLikes?yearData=${year}`);
        dispatch({
            type: GET_TOTAL_LIKE_ANALYTIC_SUCCESS,
            response: response.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_TOTAL_LIKE_ANALYTIC_FAIL,
            payload: error
        })
    }
}
