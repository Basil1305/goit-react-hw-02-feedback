import React, { Component } from "react";

export default class Statistics extends Component {
  render() {
    return (
      <>
        <h3>Good: {this.props.goodNum}</h3>
        <h3>Neutral: {this.props.neutralNum}</h3>
        <h3>Bad: {this.props.badNum}</h3>
        <h3>
          Total:{" "}
          {this.props.badNum + this.props.neutralNum + this.props.goodNum}
        </h3>
        <h3>
          Positive feedback:
          {Math.round(
            (100 /
              (this.props.badNum +
                this.props.neutralNum +
                this.props.goodNum)) *
              this.props.goodNum
          ) + "%"}
        </h3>
      </>
    );
  }
}
