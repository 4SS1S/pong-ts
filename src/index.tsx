import React from "react";
import ReactDom from "react-dom";

import App from "./app";

const rootContainer = document.querySelector("#root");

ReactDom.render(<App />, rootContainer);
