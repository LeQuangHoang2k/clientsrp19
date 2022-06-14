import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./apps/store";
import { Provider } from "react-redux";
// import { Counter } from "./features/counter/Counter";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
