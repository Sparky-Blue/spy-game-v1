import React, { Component } from "react";

class Scratchpad extends Component {
  state = {
    text: ""
  };

  onChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return (
      <div className="scratchpad">
        <div className="window-header">
          <button onClick={this.props.hide}>x</button>
        </div>
        <textarea
          className="scratchpad-input"
          type="text"
          id="scratchpad-text"
          value={this.state.text}
          onChange={e => this.onChange(e)}
        />
      </div>
    );
  }
}

export default Scratchpad;
