import React, { Component } from "react";
import ReactDOM from "react-dom";
import bluePartyParrot from "./blue-party-parrot.png";
import styles from "./style.mod.css";

// This component uses CSS in JS.
export default class Image extends Component {
  render() {
    return (
      <div>
        <img src="https://www.dferber.de/favicon.ico" />
        <img src="/party-parrot.png" />
        <img src={bluePartyParrot} />
        <div
          style={{
            width: "200px",
            height: "200px",
            background: "url(/party-parrot.png)"
          }}
        />
        <div
          style={{
            width: "200px",
            height: "200px"
          }}
          className={styles.birdie}
        />
      </div>
    );
  }
}
