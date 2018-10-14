import React, { Component } from "react";
import Icon from "./Icon";

class Icons extends Component {
  state = {
    icons: [
      { name: "icon-1", logo: "", icon: "file" },
      { name: "icon-1", logo: "", icon: "folder" },
      { name: "icon-1", logo: "", icon: "envelope" },
      { name: "icon-1", logo: "", icon: "globe" },
      { name: "icon-1", logo: "", icon: "file" },
      { name: "icon-1", logo: "", icon: "file" },
      { name: "icon-1", logo: "", icon: "file" },
      { name: "icon-1", logo: "", icon: "file" },
      { name: "icon-1", logo: "", icon: "file" },
      { name: "icon-1", logo: "", icon: "file" },
      { name: "icon-1", logo: "", icon: "file" },
      { name: "icon-1", logo: "", icon: "file" },
      { name: "icon-1", logo: "", icon: "file" },
      { name: "icon-1", logo: "", icon: "file" },
      { name: "icon-1", logo: "", icon: "file" },
      { name: "icon-1", logo: "", icon: "file" },
      { name: "icon-1", logo: "", icon: "file" },
      { name: "icon-1", logo: "", icon: "file" },
      { name: "icon-1", logo: "", icon: "file" },
      { name: "icon-1", logo: "", icon: "file" },
      { name: "icon-1", logo: "", icon: "file" }
    ]
  };
  render() {
    return (
      <div className="icons">
        {this.state.icons.map((icon, i) => (
          <Icon
            position={i}
            name={icon.name}
            icon={icon.icon}
            draggable={true}
            classStyle={"desktop-icons"}
            key={i}
          />
        ))}
      </div>
    );
  }
}

export default Icons;
