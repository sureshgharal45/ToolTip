import React, { Component } from "react";

export default class Tooltip extends Component {
  classn = () => {
    return `${this.props.position}`;
  };

  render() {
    return (
      <div className={`${this.classn()}`}>
        thanks for hoovering!! I m a tool-tip
      </div>
    );
  }
}
