import "./styles/Index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "./store/index";
import { Root } from "./Root";

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root store={store} />
  </React.StrictMode>
);
