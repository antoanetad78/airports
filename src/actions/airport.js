import { AIRPORT_DATA } from "../constants";

export const getAirportData = airport => dispatch => {
  console.log(airport, "airport");

  dispatch({
    type: AIRPORT_DATA,
    payload: airport
  });
};
