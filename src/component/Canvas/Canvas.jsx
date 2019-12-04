import React from 'react';
import Sky from '../Sky/Sky.jsx';
import Ground from '../Ground/Ground';
import CannonBase from '../CannonBase/CannonBase.jsx';
import CannonPipe from '../CannonPipe/CannonPipe.jsx';

const Canvas = () => {
  const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      viewBox={viewBox}
    >
      <Sky />
      <Ground />
      <CannonPipe rotation={45}/>
      <CannonBase />
    </svg>
  );
};

export default Canvas;