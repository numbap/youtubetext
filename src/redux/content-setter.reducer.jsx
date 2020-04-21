import {
  SET_CAPTION,
  CLEAR_CAPTION,
  SET_VIDLIST,
  CLEAR_VIDLIST,
  SET_9999,
} from "./action-types";

const initialState = {
  vidList: [],
  caption: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CAPTION: {
      return {
        ...state,
        caption: action.caption,
      };
    }
    case SET_VIDLIST: {
      console.log("Setting Vid List");
      return {
        ...state,
        vidList: action.vidList,
      };
    }
    case CLEAR_CAPTION: {
      return {
        ...state,
        caption: [],
      };
    }
    case CLEAR_VIDLIST: {
      return {
        ...state,
        vidList: [],
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
