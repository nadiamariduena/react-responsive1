import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
import App from "./App";
import "./scss/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
