import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./css/style.css";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { GetStore } from "./appRedux/store";

import "./i18n/i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = GetStore();

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
