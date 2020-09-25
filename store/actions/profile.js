import { SET_USERNAME } from "../actionTypes";
import { addError, removeError } from "./error";

// get username
export const setUsername = (data = "default username") => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_USERNAME, payload: data });
      dispatch(removeError());
    } catch (err) {
      dispatch(addError(err));
    }
  };
};
