/* eslint-disable no-undef */
import { useState } from "react";
import SwitchColor from "./SwitchColor";

const Event = () => {
  const [click, setClick] = useState(0);
  const [color, setColor] = useState("");

  function clickOutSide() {
    setClick((c) => c + 1);
  }

  function getRandomLightColor() {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    let rgbColor = `rgb(${r}, ${g}, ${b})`;
    setColor(rgbColor);
    return rgbColor;
  }

  function handleColorChage() {
    let bodyColor = document.body.style;
    bodyColor.backgroundColor = getRandomLightColor();
  }
  return (
    <div style={{ width: "100%", height: "100vh" }} onClick={clickOutSide}>
      <SwitchColor handleColorChage={handleColorChage} />

      <h1>Change the number {click}</h1>
      <h1>RGB Color Code: {color}</h1>
    </div>
  );
};

export default Event;
