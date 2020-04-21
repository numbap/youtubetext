import { ADD_NUMBER, SUBSTRACT_NUMBER, SET_9999 } from "./action-types";

const initialState = {
  count: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_NUMBER: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case SUBSTRACT_NUMBER: {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    case SET_9999: {
      return {
        ...state,
        count: 9999,
      };
    }
    default:
      return state;
  }
}
