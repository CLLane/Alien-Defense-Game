import React from "react";
import Sky from "../Sky/Sky.jsx";
import Ground from "../Ground/Ground";
import CannonBase from "../CannonBase/CannonBase.jsx";
import CannonPipe from "../CannonPipe/CannonPipe.jsx";
import CannonBall from "../CannonBall/CannonBall.jsx";
import CurrentScore from "../CurrentScore/CurrentScore";
import FlyingObject from "../FlyingObject/FlyingObject";
import Heart from '../Heart/Heart';
import PropTypes from "prop-types";

const Canvas = props => {
  console.log("in the Canvas", props);
  const viewBox = [
    window.innerWidth / -2,
    100 - window.innerHeight,
    window.innerWidth,
    window.innerHeight
  ];
  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
    >
      <defs>
        <filter id="shadow">
          <feDropShadow dex="1" dy="1" stdDeviation="2" />
        </filter>
      </defs>
      <Sky />
      <Ground />
      <CannonPipe rotation={props.angle} />
      <CannonBase />
      <CannonBall position={{ x: 0, y: -100 }} />
      <CurrentScore score={15} />
      <FlyingObject position={{ x: -150, y: -300 }} />
      <FlyingObject position={{ x: 150, y: -300 }} />
      <Heart position={{ x: -300, y: 35 }} />
    </svg>
  );
};

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired
};

export default Canvas;
