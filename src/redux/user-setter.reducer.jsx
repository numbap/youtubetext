import { SET_USER, CLEAR_USER, SET_CHANNELS, SET_9999 } from "./action-types";

const initialState = {
  access_token: null,
  googleId: null,
  imageUrl: null,
  email: null,
  name: null,
  channels: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER: {
      const { access_token, googleId, imageUrl, email, name } = action.user;
      return {
        ...state,
        access_token,
        googleId,
        imageUrl,
        email,
        name,
      };
    }
    case CLEAR_USER: {
      return {
        ...state,
        access_token: null,
        googleId: null,
        imageUrl: null,
        email: null,
        name: null,
        channels: [],
      };
    }
    case SET_CHANNELS: {
      return {
        ...state,
        channels: action.channels,
      };
    }
    case SET_9999: {
      return {
        ...state,
        access_token: null,
        googleId: null,
        imageUrl: null,
        email: null,
        name: null,
      };
    }
    default:
      return state;
  }
}
