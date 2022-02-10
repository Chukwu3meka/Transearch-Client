import { removeErrorAction, catchErr } from "./error";

export const setProfileAction = (data) => {
  return async (dispatch) => {
    try {
      if (localStorage) {
        localStorage.setItem("Transearch", data.id);
        dispatch({ type: "SET_PROFILE", payload: data });
        dispatch(removeErrorAction("all"));
      }
    } catch (err) {
      return catchErr(dispatch, err, "TEMPORARY_SERVER_ERROR");
    }
  };
};

export const logoutAction = () => {
  return async (dispatch) => {
    localStorage.clear();
    dispatch({ type: "SET_PROFILE", payload: null });
  };
};
