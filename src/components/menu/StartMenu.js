import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class StartMenu extends Component {
  render() {
    return (
      <div className="start-menu">
        <FontAwesomeIcon icon="star" className="start-menu-icon" />
      </div>
    );
  }
}

export default StartMenu;
