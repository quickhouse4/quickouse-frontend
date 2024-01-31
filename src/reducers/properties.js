import { RETRIEVE_PROPERTIES } from "../actions/types";

const initialState = [];

function PropertiesReducer(properties = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case  RETRIEVE_PROPERTIES :
      return payload;
    default:
      return properties;
  }
};

export default PropertiesReducer;