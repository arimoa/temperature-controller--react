import React, { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";
function Container() {
  const [finalTemperature, setFinalTemperature] = useState(0);

  function buttonDataHandler(calculatedTemp) {
    setFinalTemperature((prev) => (prev = calculatedTemp));
  }

  return (
    <div className="container">
      <Display final={finalTemperature} />
      <Buttons onButtonData={buttonDataHandler} />
    </div>
  );
}

export default Container;
