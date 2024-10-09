
import {
  FILTER_VACANT_PLOT_REQUEST,
  FILTER_VACANT_PLOT_SUCCESS,
  FILTER_VACANT_PLOT_FAIL,
  FILTER_VACANT_PLOT_SALE_REQUEST,
  FILTER_VACANT_PLOT_SALE_SUCCESS,
  FILTER_VACANT_PLOT_SALE_FAIL,
  FILTER_WAREHOUSE_REQUEST,
  FILTER_WAREHOUSE_SUCCESS,
  FILTER_WAREHOUSE_FAIL,
  FILTER_WAREHOUSE_SALE_REQUEST,
  FILTER_WAREHOUSE_SALE_SUCCESS,
  FILTER_WAREHOUSE_SALE_FAIL,
  FILTER_COMMERCIAL_REQUEST,
  FILTER_COMMERCIAL_SUCCESS,
  FILTER_COMMERCIAL_FAIL,
  FILTER_COMMERCIAL_SALE_REQUEST,
  FILTER_COMMERCIAL_SALE_SUCCESS,
  FILTER_COMMERCIAL_SALE_FAIL,
  FILTER_APARTMENTS_REQUEST,
  FILTER_APARTMENTS_SUCCESS,
  FILTER_APARTMENTS_FAIL,
  FILTER_APARTMENTS_SALE_REQUEST,
  FILTER_APARTMENTS_SALE_SUCCESS,
  FILTER_APARTMENTS_SALE_FAIL,
  FILTER_RESIDENTIAL_REQUEST,
  FILTER_RESIDENTIAL_SUCCESS,
  FILTER_RESIDENTIAL_FAIL,
  FILTER_RESIDENTIAL_SALE_REQUEST,
  FILTER_RESIDENTIAL_SALE_SUCCESS,
  FILTER_RESIDENTIAL_SALE_FAIL,
  FILTER_OFFICE_REQUEST,
  FILTER_OFFICE_SUCCESS,
  FILTER_OFFICE_FAIL,
  FILTER_OFFICE_SALE_REQUEST,
  FILTER_OFFICE_SALE_SUCCESS,
  FILTER_OFFICE_SALE_FAIL,


} from "../actions/types";

import axios from "axios";


export const vacantPlotFilter = () => async (dispatch) => {
  try {
    dispatch({
      type: FILTER_VACANT_PLOT_REQUEST
    });

    const response = await axios.get(
      "http://197.243.26.162/api/properties/rent/vacantPlots?page=1&limit=10"
    );

    dispatch({ type: FILTER_VACANT_PLOT_SUCCESS, payload: response.data.data.docs });

  } catch (error) {
    dispatch({ type: FILTER_VACANT_PLOT_FAIL, payload: error.response.data.error });
  }
};
export const vacantPlotFilterSale = () => async (dispatch) => {
  try {
    dispatch({
      type: FILTER_VACANT_PLOT_SALE_REQUEST
    });

    const response = await axios.get(
      "http://197.243.26.162/api/properties/sale/vacantPlots?page=1&limit=10"
    );

    dispatch({ type: FILTER_VACANT_PLOT_SALE_SUCCESS, payload: response.data.data.docs });


  } catch (error) {
    dispatch({ type: FILTER_VACANT_PLOT_SALE_FAIL, payload: error.response.data.error });
  }
};

export const warehouseFilter = () => async (dispatch) => {
  try {
    dispatch({
      type: FILTER_WAREHOUSE_REQUEST
    });
    const response = await axios.get(
      "http://197.243.26.162/api/properties/rent/warehouse?page=1&limit=10"
    );

    dispatch({ type: FILTER_WAREHOUSE_SUCCESS, payload: response.data.data.docs });

  } catch (error) {
    dispatch({ type: FILTER_WAREHOUSE_FAIL, payload: error.response.data.error });

  }
};

export const warehouseFiltersale = () => async (dispatch) => {
  try {
    dispatch({
      type: FILTER_WAREHOUSE_SALE_REQUEST
    });

    const response = await axios.get(
      "http://197.243.26.162/api/properties/sale/warehouse?page=1&limit=10"
    );

    dispatch({ type: FILTER_WAREHOUSE_SALE_SUCCESS, payload: response.data.data.docs });
  } catch (error) {
    dispatch({ type: FILTER_WAREHOUSE_SALE_FAIL, payload: error.response.data.error });

  }
};


export const commercialFilter = () => async (dispatch) => {
  try {
    dispatch({
      type: FILTER_COMMERCIAL_REQUEST
    });

    const response = await axios.get(
      "http://197.243.26.162/api/properties/rent/commercial?page=1&limit=10"
    );

    dispatch({ type: FILTER_COMMERCIAL_SUCCESS, payload: response.data.data.docs });

  } catch (error) {
    dispatch({ type: FILTER_COMMERCIAL_FAIL, payload: error.response.data.error });

  }
};

export const commercialFilterSale = () => async (dispatch) => {
  try {
    dispatch({
      type: FILTER_COMMERCIAL_SALE_REQUEST
    });

    const response = await axios.get(
      "http://197.243.26.162/api/properties/sale/commercial?page=1&limit=10"
    );

    dispatch({ type: FILTER_COMMERCIAL_SALE_SUCCESS, payload: response.data.data.docs });
  } catch (error) {
    dispatch({ type: FILTER_COMMERCIAL_SALE_FAIL, payload: error.response.data.error });
  }
};


export const apartmentsFilter = () => async (dispatch) => {
  try {
    dispatch({
      type: FILTER_APARTMENTS_REQUEST
    });

    const response = await axios.get(
      "http://197.243.26.162/api/properties/rent/apartments?page=1&limit=10"
    )

    dispatch({ type: FILTER_APARTMENTS_SUCCESS, payload: response.data.data.docs });

  } catch (error) {
    dispatch({ type: FILTER_APARTMENTS_FAIL, payload: error.response.data });
  }
};


export const apartmentsFilterSale = () => async (dispatch) => {
  try {
    dispatch({
      type: FILTER_APARTMENTS_SALE_REQUEST
    });

    const response = await axios.get(
      "http://197.243.26.162/api/properties/sale/apartments?page=1&limit=10"
    );

    dispatch({ type: FILTER_APARTMENTS_SALE_SUCCESS, payload: response.data.data.docs });
  } catch (error) {

    dispatch({ type: FILTER_APARTMENTS_SALE_FAIL, payload: error.response.data.error });

  }
};


export const residentialsFilter = () => async (dispatch) => {
  try {
    dispatch({
      type: FILTER_RESIDENTIAL_REQUEST
    });

    const response = await axios.get(
      "http://197.243.26.162/api/properties/rent/residential?page=1&limit=10"
    );

    dispatch({ type: FILTER_RESIDENTIAL_SUCCESS, payload: response.data.data.docs });
  } catch (error) {
    dispatch({ type: FILTER_RESIDENTIAL_FAIL, payload: error.response.data.error });

  }
};

export const residentialsFilterSale = () => async (dispatch) => {
  try {
    dispatch({
      type: FILTER_RESIDENTIAL_SALE_REQUEST
    });

    const response = await axios.get(
      "http://197.243.26.162/api/properties/sale/residential?page=1&limit=10"
    );

    dispatch({ type: FILTER_RESIDENTIAL_SALE_SUCCESS, payload: response.data.data.docs });
  
  } catch (error) {
    dispatch({ type: FILTER_RESIDENTIAL_SALE_FAIL, payload: error.response.data.error });
  }
};



export const officesFilter = () => async (dispatch) => {
  try {
    dispatch({
      type: FILTER_OFFICE_REQUEST
    });

    const response = await axios.get(
      "http://197.243.26.162/api/properties/rent/offices?page=1&limit=10"
    );

    dispatch({ type: FILTER_OFFICE_SUCCESS, payload: response.data.data.docs });
  } catch (error) {
    dispatch({ type: FILTER_OFFICE_FAIL, payload: error.response.data.error });
  }
};


export const officesFilterSale = () => async (dispatch) => {
  try {
    dispatch({
      type: FILTER_OFFICE_SALE_REQUEST
    });

    const response = await axios.get(
      "http://197.243.26.162/api/properties/sale/offices?page=1&limit=10"
    );

    dispatch({ type: FILTER_OFFICE_SALE_SUCCESS, payload: response.data.data.docs });
  } catch (error) {
    dispatch({ type: FILTER_OFFICE_SALE_FAIL, payload: error.response.data.error });

  }
};
