import { combineReducers } from "redux";

import runway from "./runways";
import airport from "./airport";

export default combineReducers({
  runway,
  airport
});
