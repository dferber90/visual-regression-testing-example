import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";
import Beautiful from "./Beautiful";
import Image from "./Image";

render(
  <div>
    <Counter />
    <hr />
    <Beautiful />
    <hr />
    <Image />
  </div>,
  document.getElementById("app")
);
