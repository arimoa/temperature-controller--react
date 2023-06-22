import React, { useState } from "react";

function Buttons(props) {
  const [temperature, setTemperature] = useState(15);

  function increaseHandler() {
    if (temperature == 30) {
      setTemperature(30);
    } else {
      setTemperature((prev) => prev + 1);
    }
  }

  function decreaseHandler() {
    if (temperature == 0) {
      setTemperature(0);
    } else {
      setTemperature((prev) => prev - 1);
    }
  }
  props.onButtonData(temperature);
  return (
    <div className="btns">
      <div className="positive" onClick={increaseHandler}>
        +
      </div>
      <div className="negative" onClick={decreaseHandler}>
        -
      </div>
    </div>
  );
}

export default Buttons;
