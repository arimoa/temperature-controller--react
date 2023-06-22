import React, { useState } from "react";
import "./Display.css";

function Display(props) {
  var tempColor;

  console.log(typeof props.final, props.final);
  if (props.final >= 20) {
    tempColor = "hot";
  } else if (props.final <= 10) {
    tempColor = "cold";
  } else {
    tempColor = "medium";
  }

  return <div className={`display ${tempColor}`}>{props.final}&deg;C</div>;
}

export default Display;
