import {
  PROPERTIES_REQUEST,
  PROPERTIES_SUCCESS,
  PROPERTIES_FAIL,
  PROPERTY_DETAILS_REQUEST,
  PROPERTY_DETAILS_SUCCESS,
  PROPERTY_DETAILS_FAIL,
  CREATE_PROPERTY_REQUEST,
  CREATE_PROPERTY_SUCCESS,
  CREATE_PROPERTY_FAIL,
  SPECIAL_PROPERTY,
  SEARCH_ALL_DATA_REQUEST,
  SEARCH_ALL_DATA_SUCCESS,
  SEARCH_ALL_DATA_FAIL,
  CREATE_SPECIAL_PROPERTY_REQUEST,
  CREATE_SPECIAL_PROPERTY_SUCCESS,
  CREATE_SPECIAL_PROPERTY_FAIL,

  PROPERTIES_FOR_RENT_REQUEST,
  PROPERTIES_FOR_RENT_SUCCESS,
  PROPERTIES_FOR_RENT_FAIL,
  PROPERTIES_FOR_SALE_REQUEST,
  PROPERTIES_FOR_SALE_SUCCESS,
  PROPERTIES_FOR_SALE_FAIL,
  MY_PROPERTIES_REQUEST,
  MY_PROPERTIES_SUCCESS,
  MY_PROPERTIES_FAIL,
} from "../actions/types";

export const propertiesListReducer = (state = { properties: [] }, action) => {
  switch (action.type) {
    case PROPERTIES_REQUEST:
      return { loading: true, properties: [] };
    case PROPERTIES_SUCCESS:
      return {
        properties: action.payload,
        totalDocs: action.totalDocs,
        limit: action.limit,
        page: action.page,
        totalPages: action.totalPages,
      };

    case PROPERTIES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const SpecialPropertiesListReducer = (
  state = { specialPropertiesLists: [] },
  action
) => {
  switch (action.type) {
    case SPECIAL_PROPERTY:
      return {
        specialPropertiesLists: action.payload,
        totalDocs: action.totalDocs,
        limit: action.limit,
        page: action.page,
        totalPages: action.totalPages,
      };
    default:
      return state;
  }
};
export const propertiesDetailsReducer = (state = { property: [] }, action) => {
  switch (action.type) {
    case PROPERTY_DETAILS_REQUEST:
      return { loading: true, property: [] };

    case PROPERTY_DETAILS_SUCCESS:
      return { loading: false, property: action.payload };

    case PROPERTY_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const createPropertyReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_PROPERTY_REQUEST:
      return { loading: true }

    case CREATE_PROPERTY_SUCCESS:
      return {
        loading: false,
        success: "successfull created",
        Response: action.payload,
      };

    case CREATE_PROPERTY_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const createSpecialPropertyReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_SPECIAL_PROPERTY_REQUEST:
      return { loading: true };
    case CREATE_SPECIAL_PROPERTY_SUCCESS:
      return {
        loading: false,
        success: "successfull created",
        Response: action.payload
      };

    case CREATE_SPECIAL_PROPERTY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getAllDataReducer = (state = { searchedData: [] }, action) => {
  switch (action.type) {
    case SEARCH_ALL_DATA_REQUEST:
      return { Searchloading: true, searchedData: [] };
    case SEARCH_ALL_DATA_SUCCESS:
      return { searchedData: action.payload };
    case SEARCH_ALL_DATA_FAIL:
      return { Searchloading: false, error: action.payload };
    default:
      return state;
  }
};


export const propertiesForRentListReducer = (state = { propertiesForRent: [] }, action) => {
  switch (action.type) {
    case PROPERTIES_FOR_RENT_REQUEST:
      return { loadingForRent: true, propertiesForRent: [] };
    case PROPERTIES_FOR_RENT_SUCCESS:
      return {
        propertiesForRent: action.payload,
        totalDocs: action.totalDocs,
        limit: action.limit,
        page: action.page,
        totalPagesforRent: action.totalPagesforRent,

      };

    case PROPERTIES_FOR_RENT_FAIL:
      return { loadingForRent: false, errorForRent: action.payload };
    default:
      return state;
  }
};

export const propertiesForSaleListReducer = (state = { propertiesForSale: [] }, action) => {
  switch (action.type) {
    case PROPERTIES_FOR_SALE_REQUEST:
      return { 
        loadingForSale: true, 
        propertiesForSale: [] 
      };
    case PROPERTIES_FOR_SALE_SUCCESS:

      return {
        propertiesForSale: action.payload,
        totalDocs: action.totalDocs,
        limit: action.limit,
        page: action.page,
        totalPagesforSale: action.totalPagesforSale,
      };

    case PROPERTIES_FOR_SALE_FAIL:
      return { 
        loadingForSale: false, 
        errorForSale: action.payload 
      };
    default:
      return state;
  }
};

export const myPropertiesListReducer = (state = { myProperty: [] }, action) => {
  switch (action.type) {
    case MY_PROPERTIES_REQUEST:
      return { loadingMyProperties: true, myProperty: [] };
    case MY_PROPERTIES_SUCCESS:
      return {
        myProperty: action.payload,
        loadingMyProperties: false,
      };
    case MY_PROPERTIES_FAIL:
      return { loadingMyProperties: false, errorMyProperties: action.payload };
    default:
      return state;
  }
};

