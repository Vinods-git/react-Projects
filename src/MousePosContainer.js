import React, { useState } from 'react';
import MousePosition from './MousePosition';

const MousePosContainer = props => {
  const [display, setDisplay] = useState(true);
  return (
    <>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <MousePosition />}
    </>
  );
};

export default MousePosContainer;
