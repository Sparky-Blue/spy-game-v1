import React from "react";
import Draggable from "react-draggable";

const Icon = ({ name, position }) => {
  return (
    <Draggable>
      <div className={`icon icon-${position}`}>{name}</div>
    </Draggable>
  );
};

export default Icon;
