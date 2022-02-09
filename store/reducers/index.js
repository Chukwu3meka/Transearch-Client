import { combineReducers } from "redux";

import error from "./error";
import profile from "./profile";

export default combineReducers({
  error,
  profile,
});
