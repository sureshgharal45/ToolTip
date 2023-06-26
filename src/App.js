import "./App.css";
import React, { Component } from "react";
import Tooltip from "./Tooltip";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      position: "top",
      hovering: false,
    };
  }

  handleClick = (pos) => {
    this.setState({
      position: pos,
    });
  };

  handleMouseOver = () => {
    this.setState({
      hovering: true,
    });
  };

  handleMouseLeave = () => {
    this.setState({
      hovering: false,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="btn-position">
          <div className="grp-name">Select the postion of the hovering</div>

          <button
            className={this.state.position === "top" ? "btn active" : "btn"}
            onClick={(e) => {
              this.handleClick("top");
            }}
          >
            Top
          </button>

          <button
            className={this.state.position === "right" ? "btn active" : "btn"}
            onClick={(e) => {
              this.handleClick("right");
            }}
          >
            Right
          </button>

          <button
            className={this.state.position === "left" ? "btn active" : "btn"}
            onClick={(e) => {
              this.handleClick("left");
            }}
          >
            Left
          </button>

          <button
            className={this.state.position === "down" ? "btn active" : "btn"}
            onClick={(e) => {
              this.handleClick("down");
            }}
          >
            Down
          </button>
        </div>

        <div id="button-container">
          <button
            className="btn hover-btn"
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseLeave}
          >
            Hover over me!!
          </button>
          {this.state.hovering && <Tooltip position={this.state.position} />}
        </div>
      </div>
    );
  }
}
