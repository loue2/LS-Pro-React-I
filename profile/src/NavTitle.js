import React, { Component } from 'react';

export default class NavTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "yellow"
    };
  }
    toggleColor() {
      if (this.state.color === "yellow") {
        this.setState({
          color: "red"
        });
      }
      else {
        this.setState({
          color: "yellow"
        });
      }
    }

  render() {
    return (
      <div className="navtitle">
        <h1 onClick={this.toggleColor.bind(this)} style={{fontSize: 50, color: this.state.color, margin: 0}}>Welcome to my React Webpage!!!</h1>
        <h3 style={{fontSize: 10}}>(Click title to change color)</h3>
      </div>
    );
  }
}
