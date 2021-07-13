import React, { useState, useEffect } from 'react';

const MousePosition = props => {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const positionHandler = e => {
    setX(e.clientX);
    setX(e.clientY);
  };
  useEffect(() => {
    console.log('position is started');
    document.addEventListener('mousemove', positionHandler);
  });

  return (
    <>
      <div>X position : {x}</div>
      <div>Y position : {y}</div>
    </>
  );
};

export default MousePosition;
