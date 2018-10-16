import React, { Component } from "react";
import Icons from "./icons/Icons";
import MenuBar from "./menu/MenuBar";
import Window from "./windows/Window";
import background from "../images/desktop.jpg";

class Desktop extends Component {
  render() {
    return (
      <div
        className="desktop"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Icons />
        <Window />
        <MenuBar />
      </div>
    );
  }
}

export default Desktop;
