import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import config, { getFullApiUrl } from "./Environment";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("get full api url",getFullApiUrl(config.api.endPoints.employee_access),);
// console.log(config, getFullUrl())
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
