import React from 'react';
import Sky from '../Sky/Sky.jsx';
import Ground from '../Ground/Ground';
import CannonBase from '../CannonBase/CannonBase.jsx';
import CannonPipe from '../CannonPipe/CannonPipe.jsx';
import PropTypes from 'prop-types';

const Canvas = () => {
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
    </svg>
  );
};

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired
}

export default Canvas;