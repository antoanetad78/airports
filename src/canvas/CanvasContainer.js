import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getRwyPxCoord,
  NORTH_POINT,
  WEST_POINT,
  getVariation
} from "../helpers/getCoordinates";

import Drawing from "./Drawing";
function CanvasContainer({ list, variation }) {
  useEffect(() => {
    if (list.length > 0) {
      setN_POINT(NORTH_POINT(list));
      setW_POINT(WEST_POINT(list));
    }
    if (variation) {
      setA_variation(getVariation(variation));
    }
  }, [list, variation]);
  const [W_POINT, setW_POINT] = useState("");
  const [N_POINT, setN_POINT] = useState("");
  const [a_variation, setA_variation] = useState(0);
  const r_list = list.map(r => {
    return { ...r, ...getRwyPxCoord(r.LAT, r.LON, N_POINT, W_POINT) };
  });
  return <Drawing list={r_list} angleVariation={a_variation} />;
}

const mapStateToProps = state => ({
  list: state.runway,
  variation: state.airport.MAGNETICVARIATION
});
export default connect(
  mapStateToProps,
  {}
)(CanvasContainer);
