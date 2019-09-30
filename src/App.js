import React, { Fragment } from "react";
import "./App.css";
import TextareaForm from "./input/TextareaForm";
import { Provider } from "react-redux";
import store from "./store";
import CanvasContainer from "./canvas/CanvasContainer";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <TextareaForm />
        <CanvasContainer />
      </Fragment>
    </Provider>
  );
}

export default App;
