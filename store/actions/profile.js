import { removeErrorAction, catchErr } from "./error";

export const setProfileAction = (data) => {
  return async (dispatch) => {
    try {
      if (localStorage) {
        const { balance, lastTransactions, title, id } = data;
        localStorage.setItem("Transearch", id);
        dispatch({ type: "SET_PROFILE", payload: { balance, lastTransactions, title, id } });
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
    dispatch({ type: "SET_PROFILE", payload: {} });
  };
};
