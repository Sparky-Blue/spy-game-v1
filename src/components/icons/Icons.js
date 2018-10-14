import React, { Component } from "react";
import Icon from "./Icon";

class Icons extends Component {
  state = {
    icons: [
      { name: "icon-1", logo: "" },
      { name: "icon-1", logo: "" },
      { name: "icon-1", logo: "" },
      { name: "icon-1", logo: "" },
      { name: "icon-1", logo: "" },
      { name: "icon-1", logo: "" },
      { name: "icon-1", logo: "" },
      { name: "icon-1", logo: "" },
      { name: "icon-1", logo: "" },
      { name: "icon-1", logo: "" },
      { name: "icon-1", logo: "" },
      { name: "icon-1", logo: "" },
      { name: "icon-1", logo: "" },
      { name: "icon-1", logo: "" },
      { name: "icon-1", logo: "" },
      { name: "icon-1", logo: "" },
      { name: "icon-1", logo: "" }
    ]
  };
  render() {
    return (
      <div className="icons">
        {this.state.icons.map((icon, i) => (
          <Icon position={i} name={icon.name} />
        ))}
      </div>
    );
  }
}

export default Icons;
