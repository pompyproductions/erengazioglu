import React from "react";
import ReactDOM from "react-dom/client";
import "./js/resize";

import App from "./react/App";
import "./sass/style.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(<App />);