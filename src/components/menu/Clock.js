import React, { Component } from "react";

class Clock extends Component {
  state = {
    time: new Date()
  };

  componentDidMount() {
    this.timerId = setInterval(this.updateTime, 60000);
  }

  updateTime = () => {
    this.setState({
      time: new Date()
    });
  };

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="clock">
        {this.state.time.toLocaleTimeString("en-GB", {
          hour: "numeric",
          minute: "numeric"
        })}
      </div>
    );
  }
}

export default Clock;
