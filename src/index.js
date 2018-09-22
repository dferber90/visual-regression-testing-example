import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";
import Beautiful from "./Beautiful";

render(
  <div>
    <Counter />
    <hr />
    <Beautiful />
  </div>,
  document.getElementById("app")
);
