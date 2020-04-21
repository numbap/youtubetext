// Lists all videos for a given channel, with pagination

import { SET_PAGINATOR, CLEAR_PAGINATOR, SET_9999 } from "./action-types";

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PAGINATOR: {
      console.log("Videos are loading");
      console.log(action.videos.map((x) => console.log(x)));
      return action.videos.length > 0 ? action.videos : [];
    }
    case CLEAR_PAGINATOR: {
      return [];
    }
    default:
      return state;
  }
}
