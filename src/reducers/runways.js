import { LOAD_RUNWAY_LIST } from "../constants";

const initialState = [];
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_RUNWAY_LIST:
      return [...state, ...payload];
    default:
      return state;
  }
}
