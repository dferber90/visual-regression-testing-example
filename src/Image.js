import React, { Component } from "react";
import ReactDOM from "react-dom";
import bluePartyParrot from "./blue-party-parrot.png";
import styles from "./style.mod.css";

export default class Image extends Component {
  render() {
    return (
      <div>
        <img src="https://www.dferber.de/favicon.ico" />
        <img src="/party-parrot.png" />
        <img src={bluePartyParrot} />
        <div className={styles.birdie} />
      </div>
    );
  }
}
