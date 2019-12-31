import React from 'react';
import Sky from '../Sky/Sky.jsx';
import Ground from '../Ground/Ground';
import CannonBase from '../CannonBase/CannonBase.jsx';
import CannonPipe from '../CannonPipe/CannonPipe.jsx';
import CannonBall from '../CannonBall/CannonBall.jsx'
import PropTypes from 'prop-types';

const Canvas = (props) => {
  const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
    >
      <Sky />
      <Ground />
      <CannonPipe rotation={props.angle}/>
      <CannonBase />
      <CannonBall position={{x: 0, y: -100}} />
    </svg>
  );
};

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired
}

export default Canvas;