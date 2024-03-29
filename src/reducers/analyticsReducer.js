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
  HOUSE_NUMBER_REQUEST,
  HOUSE_NUMBER_SUCCESS,
  HOUSE_NUMBER_FAIL,
  RENT_NUMBER_REQUEST,
  RENT_NUMBER_SUCCESS,
  RENT_NUMBER_FAIL,
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
} from "../actions/types";

export const getAnalyticsReducer = (state = { analytics: [] }, action) => {
  switch (action.type) {
    case GET_ANALYTICS_REQUEST:
      return { loading: true, analytics: [] }
    case GET_ANALYTICS_SUCCESS:
      return { loading: false, analytics: action.response };
    case GET_ANALYTICS_FAIL:
      return { loading: false, analyticsError: action.response }
    default:
      return state;
  }
}

export const getYearViewsReducer = (state = { yearViews: [] }, action) => {
  switch (action.type) {
    case GET_YEAR_VIEWS_REQUEST:
      return { yearLoading: true, yearViews: [] }
    case GET_YEAR_VIEWS_SUCCESS:
      return { yearLoading: false, yearViews: action.response };
    case GET_YEAR_VIEWS_FAIL:
      return { yearLoading: false, yearError: action.response }
    default:
      return state;
  }
}

export const getYearLikesReducer = (state = { yearLikes: [] }, action) => {
  switch (action.type) {
    case GET_YEAR_LIKES_REQUEST:
      return { yearLoading: true, yearLikes: [] }
    case GET_YEAR_LIKES_SUCCESS:
      return { yearLoading: false, yearLikes: action.response };
    case GET_YEAR_LIKES_FAIL:
      return { yearLoading: false, yearError: action.response }
    default:
      return state;
  }
}

export const getLikeReducer = (state = { analyticsLikes: [] }, action) => {
  switch (action.type) {
    case GET_LIKE_ANALYTICS_REQUEST:
      return { likeLoading: true, analyticsLikes: [] }
    case GET_LIKE_ANALYTICS_SUCCESS:
      return { likeLoading: false, analyticsLikes: action.response };
    case GET_LIKE_ANALYTICS_FAIL:
      return { likeLoading: false, analyticsLikeError: action.response }
    default:
      return state;
  }
}

export const getLikeNumberReducer = (state = { likeNumber: [] }, action) => {
  switch (action.type) {
    case LIKE_NUMBER_REQUEST:
      return { likLoading: true, likeNumber: [] }
    case LIKE_NUMBER_SUCCESS:
      return { likLoading: false, likeNumber: action.response };
    case LIKE_NUMBER_FAIL:
      return { likLoading: false, likeError: action.response }
    default:
      return state;
  }
}

export const getViewsNumberReducer = (state = { viewsNumber: [] }, action) => {
  switch (action.type) {
    case VIEWS_NUMBER_REQUEST:
      return { loadingView: true, viewsNumber: [] }
    case VIEWS_NUMBER_SUCCESS:
      return { loadingView: false, viewsNumber: action.response };
    case VIEWS_NUMBER_FAIL:
      return { loadingView: false, viewsError: action.response }
    default:
      return state;
  }
}

export const getPostNumberReducer = (state = { postNumber: [] }, action) => {
  switch (action.type) {
    case POST_NUMBER_REQUEST:
      return { postLoading: true, postNumber: [] }
    case POST_NUMBER_SUCCESS:
      return { postLoading: false, postNumber: action.response };
    case POST_NUMBER_FAIL:
      return { postLoading: false, postError: action.response }
    default:
      return state;
  }
}

export const plotNumberReducer = (state = { plotNumbers: [] }, action) => {
  switch (action.type) {
    case PLOT_NUMBER_REQUEST:
      return { plotLoading: true, plotNumbers: [] }
    case PLOT_NUMBER_SUCCESS:
      return { plotLoading: false, plotNumbers: action.response };
    case PLOT_NUMBER_FAIL:
      return { plotLoading: false, plotError: action.response }
    default:
      return state;
  }
}

export const houseNumberReducer = (state = { houseNumbers: [] }, action) => {
  switch (action.type) {
    case HOUSE_NUMBER_REQUEST:
      return { houseLoading: true, houseNumbers: [] }
    case HOUSE_NUMBER_SUCCESS:
      return { houseLoading: false, houseNumbers: action.response };
    case HOUSE_NUMBER_FAIL:
      return { houseLoading: false, houseError: action.response }
    default:
      return state;
  }
}
export const rentNumberReducer = (state = { rentNumbers: [] }, action) => {
  switch (action.type) {
    case RENT_NUMBER_REQUEST:
      return { rentLoading: true, rentNumbers: [] }
    case RENT_NUMBER_SUCCESS:
      return { rentLoading: false, rentNumbers: action.response };
    case RENT_NUMBER_FAIL:
      return { rentLoading: false, rentError: action.response }
    default:
      return state;
  }
}

export const saleNumberReducer = (state = { saleNumbers: [] }, action) => {
  switch (action.type) {
    case SALE_NUMBER_REQUEST:
      return { saleLoading: true, saleNumbers: [] }
    case SALE_NUMBER_SUCCESS:
      return { saleLoading: false, saleNumbers: action.response };
    case SALE_NUMBER_FAIL:
      return { saleLoading: false, saleError: action.response }
    default:
      return state;
  }
}

export const totalPostReducer = (state = { totalPost: [] }, action) => {
  switch (action.type) {
    case TOTAL_POST_REQUEST:
      return { totalPostLoading: true, totalPost: [] }
    case TOTAL_POST_SUCCESS:
      return { totalPostLoading: false, totalPost: action.response };
    case TOTAL_POST_FAIL:
      return { totalPostLoading: false, totalPostError: action.response }
    default:
      return state;
  }
}

export const totalViewsReducer = (state = { totalViews: [] }, action) => {
  switch (action.type) {
    case TOTAL_VIEWS_REQUEST:
      return { totalViewsLoading: true, totalViews: [] }
    case TOTAL_VIEWS_SUCCESS:
      return { totalViewsLoading: false, totalViews: action.response };
    case TOTAL_VIEWS_FAIL:
      return { totalViewsLoading: false, totalViewsError: action.response }
    default:
      return state;
  }
}

export const visitorsTrackReducer = (state = {}, action) => {
  switch (action.type) {
    case VISITORS_TRACK_REQUEST:
      return {
        visitorsLoading: true,
      };
    case VISITORS_TRACK_SUCCESS:
      return {
        visitorsLoading: false,
        Response: action.payload
      };
    case VISITORS_TRACK_FAIL:
      return {
        visitorsLoading: false,
        visitorsError: action.response
      }
    default:
      return state;
  }
}

export const visitorAnalyticsReducer = (state = { visitorAnalytics: [] }, action) => {
  switch (action.type) {
    case VISITOR_ANALYTIC_REQUEST:
      return { visitorLoading: true, visitorAnalytics: [] }
    case VISITOR_ANALYTIC_SUCCESS:
      return { visitorLoading: false, visitorAnalytics: action.response };
    case VISITOR_ANALYTIC_FAIL:
      return { visitorLoading: false, visitorError: action.response }
    default:
      return state;
  }
}

export const getTotalViewAnalyticsReducer = (state = { totalViewAnalytics: [] }, action) => {
  switch (action.type) {
    case GET_TOTAL_VIEW_ANALYTIC_REQUEST:
      return { totalViewLoading: true, totalViewAnalytics: [] }
    case GET_TOTAL_VIEW_ANALYTIC_SUCCESS:
      return { totalViewLoading: false, totalViewAnalytics: action.response };
    case GET_TOTAL_VIEW_ANALYTIC_FAIL:
      return { totalViewLoading: false, totalViewError: action.response }
    default:
      return state;
  }
}

export const getTotalLikeAnalyticsReducer = (state = { totalLikeAnalytics: [] }, action) => {
  switch (action.type) {
    case GET_TOTAL_LIKE_ANALYTIC_REQUEST:
      return { totalLikeLoading: true, totalLikeAnalytics: [] }
    case GET_TOTAL_LIKE_ANALYTIC_SUCCESS:
      return { totalLikeLoading: false, totalLikeAnalytics: action.response };
    case GET_TOTAL_LIKE_ANALYTIC_FAIL:
      return { totalLikeLoading: false, totalLikeError: action.response }
    default:
      return state;
  }
}
