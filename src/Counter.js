import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./global.css";
import "./global-styles-through-css-modules.mod.css";
import styles from "./style.mod.css";

export default class Counter extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div>
        <button
          className={styles.button}
          onClick={() => {
            this.setState(prevState => ({ count: prevState.count + 1 }));
          }}
          data-testid="increment-button"
        >
          Increment
        </button>
        <p>Counted {this.state.count}</p>
      </div>
    );
  }
}
