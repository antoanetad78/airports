import { LOAD_RUNWAY_LIST } from "../constants";
//Normally we want to use inital state declared in a variable, but the build script throws an error.
// const initialState = [];
//This is the temporary solution:
export default function(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_RUNWAY_LIST:
      return [...state, ...payload];
    default:
      return state;
  }
}
