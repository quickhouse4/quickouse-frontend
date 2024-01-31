import * as type from "../ActionTypes/index";

const initialState = {
  data: null,
};

const sampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SAMPLE_SUCCESS:
      return {
        ...state,
        data: " this shows that redux is well set and successful",
      };

    default:
      return state;
  }
};

export default sampleReducer;
