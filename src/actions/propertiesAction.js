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
  BLOCK_PROPERTY_REQUEST,
  BLOCK_PROPERTY_SUCCESS,
  BLOCK_PROPERTY_FAIL
} from "../actions/types";

import axios from "axios";

let token = localStorage.getItem("token");

export const listProperties = (page, limit) => async (dispatch) => {
  try {

    dispatch({ type: PROPERTIES_REQUEST });

    const response = await axios.get(
      `https://quickhouse.herokuapp.com/api/allProperties?page=${page}&limit=${limit}`
    );

    dispatch({
      type: PROPERTIES_SUCCESS,
      payload: response.data.data.docs,
      totalDocs: response.data.data.totalDocs,
      limit: response.data.data.limit,
      page: response.data.data.page,
      totalPages: response.data.data.totalPages,
      pagingCounter: response.data.data.pagingCounter,
      hasPrevPage: response.data.data.hasPrevPage,
      hasNextPage: response.data.data.hasNextPage,
      prevPage: response.data.data.prevPage,
      nextPage: response.data.data.nextPage,
    });
  } catch (error) {
    dispatch({ type: PROPERTIES_FAIL, payload: error.response.data.error });
    console.log("error:", error);
  }
};

export const singleProperty = (id) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_DETAILS_REQUEST });

    const response = await axios.get(
      `https://quickhouse.herokuapp.com/api/property/${id}`
    );

    dispatch({ type: PROPERTY_DETAILS_SUCCESS, payload: response.data.data });
  } catch (error) {
    dispatch({ type: PROPERTY_DETAILS_FAIL, payload: error });
  }
};

export const createProperty = (payload, token, history) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_PROPERTY_REQUEST,
    });

    const response = await axios.post(
      "https://quickhouse.herokuapp.com/api/property",
      payload[0],
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          token: token,
        },
      }
    );

    dispatch({
      type: CREATE_PROPERTY_SUCCESS,
      payload: response.data.data
    });

    history.push(`/property/${response.data.data._id}`);
    window.location.reload();
  } catch (error) {
    dispatch({
      type: CREATE_PROPERTY_FAIL,
      payload: error,
    });
  }
};


export const createSpecialProperty =
  (payload, token, history) => async (dispatch) => {
    try {
      dispatch({
        type: CREATE_SPECIAL_PROPERTY_REQUEST,
      });

      const response = await axios.post(
        "https://quickhouse.herokuapp.com/api/specialProperty",
        payload[0],
        {
          headers: {
            token: token,
          },
        }
      );

      dispatch({
        type: CREATE_SPECIAL_PROPERTY_SUCCESS,
        payload: response.data.data,
      });
      history.push(`/property/${response.data.data._id}`);
      window.location.reload();
    } catch (error) {
      dispatch({
        type: CREATE_SPECIAL_PROPERTY_FAIL,
        payload: error,
      });
    }
  };

export const SpecialProperties = (page, limit) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://quickhouse.herokuapp.com/api/specialProperties?page=${page}&limit=${limit}`
    );
    dispatch({
      type: SPECIAL_PROPERTY,
      payload: response.data.data.docs,
      totalDocs: response.data.data.totalDocs,
      limit: response.data.data.limit,
      page: response.data.data.page,
      totalPagesforSale: response.data.data.totalPages,
    });
  } catch (error) {
    // console.log("Error response: ", error.response);

  }
};

export const allData =
  (search = "") =>
    async (dispatch) => {
      try {
        dispatch({
          type: SEARCH_ALL_DATA_REQUEST,
        });

        const response = await axios.get(
          `https://quickhouse.herokuapp.com/api/properties/search?search=${search}`
        );

        dispatch({
          type: SEARCH_ALL_DATA_SUCCESS, payload: response.data.data
        });

      } catch (error) {
        dispatch({
          type: SEARCH_ALL_DATA_FAIL,
          payload: error,
        });
      }
    };

export const propertyForRent = (pageCount, pageLimit) => async (dispatch) => {

  try {
    dispatch({ type: PROPERTIES_FOR_RENT_REQUEST });

    const response = await axios.get(
      `https://quickhouse.herokuapp.com/api/properties/rent?page=${pageCount}&limit=${pageLimit}`
    );

    dispatch({
      type: PROPERTIES_FOR_RENT_SUCCESS,
      payload: response.data.data.docs,
      totalDocs: response.data.data.totalDocs,
      limit: response.data.data.limit,
      page: response.data.data.page,
      totalPagesforRent: response.data.data.totalPages,
    });
  } catch (error) {
    dispatch({ type: PROPERTIES_FOR_RENT_FAIL, payload: error });
  }
};



export const propertyForSale = (pageCount, pageLimit) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTIES_FOR_SALE_REQUEST });

    const response = await axios.get(
      `https://quickhouse.herokuapp.com/api/properties/sale?page=${pageCount}&limit=${pageLimit}`
    );

    dispatch({
      type: PROPERTIES_FOR_SALE_SUCCESS,
      payload: response.data.data.docs,
      totalDocs: response.data.data.totalDocs,
      limit: response.data.data.limit,
      page: response.data.data.page,
      totalPagesforSale: response.data.data.totalPages,
    });
  } catch (error) {
    dispatch({ type: PROPERTIES_FOR_SALE_FAIL, payload: error });
  }
};

export const myProperties = (token) => async (dispatch) => {
  try {
    dispatch({ type: MY_PROPERTIES_REQUEST });

    const response = await axios.get(
      `https://quickhouse.herokuapp.com/api/myproperty`,
      {
        headers: {
          token: token,
        },
      }
    );
    // console.log("response", response.data.data);

    dispatch({
      type: MY_PROPERTIES_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({ type: MY_PROPERTIES_FAIL, payload: error });
  }
};

export const blockProperty = (id, payload, token) => async (dispatch) => {
  try {
    dispatch({ type: BLOCK_PROPERTY_REQUEST });

    const response = await axios.put(
      `https://quickhouse.herokuapp.com/api/property/visibility/${id}`,
      payload,
      {
        headers: {
          token: token,
        },
      }
    );

    dispatch({
      type: BLOCK_PROPERTY_SUCCESS,
      payload: response.data,
    });

  } catch (error) {
    console.log("error", error);
    dispatch({ type: BLOCK_PROPERTY_FAIL, payload: error });
  }
}
