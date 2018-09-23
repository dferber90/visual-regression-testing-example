import React, { Component } from "react";
import ReactDOM from "react-dom";

// This component uses CSS in JS.
export default class Image extends Component {
  render() {
    return (
      <div>
        <img src="https://www.dferber.de/favicon.ico" />
        <img src="/party-parrot.png" />
      </div>
    );
  }
}
