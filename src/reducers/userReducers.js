import {
  ALL_USER_FAIL,
  ALL_USER_REQUEST,
  ALL_USER_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  GET_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  USER_LOGIN,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  UPDATE_ROLE_REQUEST,
  UPDATE_ROLE_SUCCESS,
  UPDATE_ROLE_FAIL,
  UPDATE_USER_ROLE
} from "../actions/types";


export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { properties: action.payload };
    default:
      return state;
  }
};

export const userUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
      return {
        loading: true
      }

    case UPDATE_PROFILE_SUCCESS:
      return {
        loading: false,
        Response: action.payload
      }
    case UPDATE_PROFILE_FAIL:
      return {
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}
const initialState = {
  loading: false,
  Response: null,
  error: null,
};

export const userRoleReducer = (state = initialState , action) => {

  switch (action.type) {
    case UPDATE_ROLE_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case UPDATE_ROLE_SUCCESS:
      return {
        ...state,
        loading: false,
        Response: action.payload,
      }
    case UPDATE_ROLE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case UPDATE_USER_ROLE:
      return {
        ...state,
        Response: { ...state.Response, role: action.payload },
        
      };
    default:
      return state
  }
}

export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_USER_REQUEST:
      return {
        loading: true
      }

    case DELETE_USER_SUCCESS:
      return {
        loading: false,
        Response: action.payload
      }
    case DELETE_USER_FAIL:
      return {
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}

export const getUserReducer = (state = { OneUser: [] }, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return { userLoading: true, OneUser: [] }
    case GET_USER_SUCCESS:
      return { userLoading: false, OneUser: action.payload };
    case GET_USER_FAIL:
      return { userLoading: false, OneUser: action.payload }
    default:
      return state;
  }
}

export const AllUserReducer = (state = { allUsers: [] }, action) => {
  switch (action.type) {
    case ALL_USER_REQUEST:
      return {
        userSLoading: true,
        allUsers: []
      }
    case ALL_USER_SUCCESS:
      return {
        userSLoading: false,
        allUsers: action.payload,
        limit: action.limit,
        page: action.page,
        totalPages: action.totalPages,
      }
    case ALL_USER_FAIL:
      return { userSLoading: false, allUsers: action.payload }
    default:
      return state
  }
}

export const forgotPasswordReducer = (state = {}, action) => {

  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:

      return {
        loadingPass: true
      };
    case FORGOT_PASSWORD_SUCCESS:

      return {
        loadingPass: false,
        Response: action.payload
      };
    case FORGOT_PASSWORD_FAIL:

      return {
        loadingPass: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export const resetPasswordReducer = (state = {}, action) => {

  switch (action.type) {
    case RESET_PASSWORD_REQUEST:
      return {
        loading: true
      }

    case RESET_PASSWORD_SUCCESS:
      return {
        loading: false,
        Response: action.payload
      }
      
    case RESET_PASSWORD_FAIL:
      return {
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}