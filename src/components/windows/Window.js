import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Rnd } from "react-rnd";

const Window = props => {
  return (
    <Rnd
      className="window"
      default={{
        x: 0,
        y: 0,
        width: 320,
        height: 200
      }}
    >
      <div className="window-header">
        <button>x</button>
      </div>
    </Rnd>
  );
};

export default Window;
