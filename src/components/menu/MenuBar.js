import React, { Component } from "react";
import Clock from "./Clock";
import Icon from "../icons/Icon";
import SettingsMenu from "./SettingsMenu";
import StartMenu from "./StartMenu";

class MenuBar extends Component {
  state = {
    menuBarLinks: [
      { name: "icon-1", logo: "", icon: "file" },
      { name: "icon-1", logo: "", icon: "folder" },
      { name: "icon-1", logo: "", icon: "envelope" },
      { name: "icon-1", logo: "", icon: "globe" }
    ]
  };

  render() {
    return (
      <div className="menu-bar">
        <div className="left-menu">
          <StartMenu />
          {this.state.menuBarLinks.map((icon, i) => {
            return (
              <Icon
                icon={icon.icon}
                classStyle="menu-bar-icon"
                draggable={false}
                key={`icon${i}`}
              />
            );
          })}
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
