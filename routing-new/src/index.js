import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  HashRouter,
  MemoryRouter,
  unstable_HistoryRouter,
} from "react-router-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
