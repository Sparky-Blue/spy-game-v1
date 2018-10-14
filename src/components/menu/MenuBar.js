import React, { Component } from "react";
import Clock from "./Clock";
import MenuLinks from "./MenuLinks";
import SettingsMenu from "./SettingsMenu";

class MenuBar extends Component {
  render() {
    return (
      <div className="menu-bar">
        <div className="left-menu">
          <div>Menu Icon</div>
          <MenuLinks name={"link1"} />
          <MenuLinks name={"link2"} />
          <MenuLinks name={"link3"} />
        </div>
        <div className="right-menu">
          <SettingsMenu />
          <Clock />
        </div>
      </div>
    );
  }
}

export default MenuBar;
