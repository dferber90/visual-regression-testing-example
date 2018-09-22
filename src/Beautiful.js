import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Button = styled.button`
  background: black;
  color: white;
`;

// This component uses CSS in JS.
export default class Beautiful extends Component {
  state = {
    showMessage: false
  };
  render() {
    return (
      <div>
        <Button
          data-testid="beautiful-button"
          onClick={() => {
            this.setState(prevState => ({
              showMessage: !prevState.showMessage
            }));
          }}
        >
          I am beautiful
        </Button>
        {this.state.showMessage && <p>And you seem to know it ;)</p>}
      </div>
    );
  }
}
