import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Canvas from "./Canvas";
function CanvasContainer({ list }) {
  return <Canvas list={list} />;
}

CanvasContainer.propTypes = {};
const mapStateToProps = state => ({
  list: state.runway
});
export default connect(
  mapStateToProps,
  {}
)(CanvasContainer);
