import React, { useState, useEffect } from 'react';

const MousePosition = props => {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const positionHandler = e => {
    console.log('mouseEvenr');
    
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log('position is started');
    window.addEventListener('mousemove', positionHandler);
    return () => {
      console.log('position is stopped');
      window.removeEventListener('mousemove', positionHandler);
    };
  }, []);

  return (
    <>
      <div>X position : {x}</div>
      <div>Y position : {y}</div>
    </>
  );
};

export default MousePosition;
