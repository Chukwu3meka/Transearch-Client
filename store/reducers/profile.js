import { SET_USERNAME } from "../actionTypes";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SET_USERNAME:
      return { ...state, username: payload };
    default:
      return state;
  }
};
