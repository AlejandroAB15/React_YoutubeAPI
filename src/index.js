import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.js";

const divRoot  = document.querySelector("#root");
const root = ReactDOM.createRoot(divRoot);

root.render(<App/>)