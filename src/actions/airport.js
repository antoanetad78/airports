import { AIRPORT_DATA } from "../constants";

export const getAirportData = airport => dispatch => {
  dispatch({
    type: AIRPORT_DATA,
    payload: airport
  });
};
