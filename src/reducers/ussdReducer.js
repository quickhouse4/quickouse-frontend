import {
    GET_USSD_REQUEST,
    GET_USSD_SUCCESS,
    GET_USSD_FAIL,
    GET_ONEUSSD_REQUEST,
    GET_ONEUSSD_SUCCESS,
    GET_ONEUSSD_FAIL,
    FILTER_OFFER_REQUEST,
    FILTER_OFFER_FAIL,
    FILTER_OFFER_SUCCESS,
    FILTER_OFFER_SALE_REQUEST,
    FILTER_OFFER_SALE_FAIL,
    FILTER_OFFER_SALE_SUCCESS,
    FILTER_REQUEST_REQUEST,
    FILTER_REQUEST_FAIL,
    FILTER_REQUEST_SUCCESS,
    FILTER_REQUEST_SALE_REQUEST,
    FILTER_REQUEST_SALE_FAIL,
    FILTER_REQUEST_SALE_SUCCESS,
    GET_APP_MESSAGE_REQUEST,
    GET_APP_MESSAGE_SUCCESS,
    GET_APP_MESSAGE_FAIL,
    GET_DETAILS_MESSAGE_REQUEST,
    GET_DETAILS_MESSAGE_SUCCESS,
    GET_DETAILS_MESSAGE_FAIL
} from "../actions/types";

export const getUssdReducer = (state = { ussd: [] }, action) => {
    switch (action.type) {
        case GET_USSD_REQUEST:
            return {
              ussdLoading: true, 
              ussd: [] 
            }
        case GET_USSD_SUCCESS:
            return { 
              ussdLoading: false, 
              ussd: action.payload 
            };
        case GET_USSD_FAIL:
            return { 
              ussdLoading: false, 
              ussd: action.payload , 
              ussdError: action.payload 
            }
        default:
            return state;
    }
}

export const getAppMessageReducer = (state = { appMessage: [] }, action) => {
    switch (action.type) {
        case GET_APP_MESSAGE_REQUEST:
            return {
              appMessageLoading: true, 
              appMessage: [] 
            }
        case GET_APP_MESSAGE_SUCCESS:
            return { 
              appMessageLoading: false, 
              appMessage: action.payload 
            };
        case GET_APP_MESSAGE_FAIL:
            return { 
              appMessageLoading: false, 
              appMessage: action.payload , 
              appMessageError: action.payload 
            }
        default:
            return state;
    }
}

export const appMessageDetailsReducer = (state = { appMessageDetail: [] }, action) => {
    switch (action.type) {

        case GET_DETAILS_MESSAGE_REQUEST:
            return {
                loading: true,
                appMessageDetail: []
            }
        case GET_DETAILS_MESSAGE_SUCCESS:
            return {
                loading: false,
                appMessageDetail: action.payload
            }
        case GET_DETAILS_MESSAGE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const getOneUssdReducer = (state = { ussdDetail: [] }, action) => {
    switch (action.type) {

        case GET_ONEUSSD_REQUEST:
            return {
                loading: true,
                ussdDetail: []
            }
        case GET_ONEUSSD_SUCCESS:
            return {
                loading: false,
                ussdDetail: action.payload
            }
        case GET_ONEUSSD_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }

}


export const offerFilterReducer = (state = { offerFilters: [] }, action) => {
  switch (action.type) {
    case FILTER_OFFER_REQUEST:
      return { 
        offerLoading: true, 
        offerFilters: [] 
      }
    case FILTER_OFFER_SUCCESS:
      return { 
        offerLoading: false, 
        activeCategory: "for Rent(iKodeshwa)", 
        offerFilters: action.payload 
      };
    case FILTER_OFFER_FAIL:
      return { 
        offerLoading: false, 
        offerError: action.payload 
      }
    default:
      return state;
  }
};

export const offerFilterSaleReducer = (state = { offerSaleFilters: [] }, action) => {
  switch (action.type) {
    case FILTER_OFFER_SALE_REQUEST:
      return { 
        offerSaleLoading: true, 
        offerSaleFilters: [] 
      }
    case FILTER_OFFER_SALE_SUCCESS:
      return { 
        offerSaleLoading: false, 
        activeCategory: "for Sale(iGurishwa)", 
        offerSaleFilters: action.payload 
      }
    case FILTER_OFFER_SALE_FAIL:
      return { 
        offerSaleLoading: false, 
        offerSaleError: action.payload 
      }
    default:
      return state;
  }
};

export const requestFilterReducer = (state = { requestFilters: [] }, action) => {
  switch (action.type) {
    case FILTER_REQUEST_REQUEST:
      return { 
        requestLoading: true, 
        requestFilters: [] 
      }
    case FILTER_REQUEST_SUCCESS:
      return { 
        requestLoading: false, 
        activeCategory: "for Rent(iKodeshwa)", 
        requestFilters: action.payload 
      }
    case FILTER_REQUEST_FAIL:
      return { 
        requestLoading: false, 
        requestError: action.payload 
      }
    default:
      return state;
  }
};

export const requestFilterSaleReducer = (state = { requestSaleFilters: [] }, action) => {
  switch (action.type) {
    case FILTER_REQUEST_SALE_REQUEST:
      return { 
        requestSaleLoading: true, 
        requestSaleFilters: [] 
      }
    case FILTER_REQUEST_SALE_SUCCESS:
      return { 
        requestSaleLoading: false, 
        activeCategory: "for Sale(iGurishwa)", 
        requestSaleFilters: action.payload 
      }
    case FILTER_REQUEST_SALE_FAIL:
      return { 
        requestSaleLoading: false, 
        requestSaleError: action.payload 
      }
    default:
      return state;
  }
};

