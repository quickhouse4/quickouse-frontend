import {
  RETRIEVE_PROPERTIES,
} from "./types";

import propertiesDataService from "../services/propertiesService"

export const retrieveProperties = () => async (dispatch) => {
  try {
    const res = await propertiesDataService.getAll();

    dispatch({
      type: RETRIEVE_PROPERTIES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};