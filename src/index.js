import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style/main.css";
import { store } from "./app/store";
import { Provider } from "react-redux";


const port = process.env.PORT || 3001;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
