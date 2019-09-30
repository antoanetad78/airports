import { LOAD_RUNWAY_LIST } from "../constants";

export const loadRunwayList = list => async dispatch => {
  try {
    dispatch({
      type: LOAD_RUNWAY_LIST,
      payload: list
    });
  } catch (error) {
    console.error();
  }
};
