import React from "react";
import Draggable from "react-draggable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ draggable, position, icon, classStyle }) => {
  return (
    <Draggable disabled={!draggable}>
      <div className={`icon icon-${position}`}>
        <FontAwesomeIcon icon={icon} className={classStyle} />
      </div>
    </Draggable>
  );
};

export default Icon;
