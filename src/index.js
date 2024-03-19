import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Importing the root component
import "bootstrap/dist/css/bootstrap.css";
ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Rendering the root component */}
  </React.StrictMode>,
  document.getElementById("root") // Mounting the root component to the DOM
);
