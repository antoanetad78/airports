import { AIRPORT_DATA } from "../constants";

const initialState = {};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case AIRPORT_DATA:
      return { ...state, ...payload };
    default:
      return state;
  }
}
