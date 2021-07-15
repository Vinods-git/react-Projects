import React, { useEffect, useState } from 'react';
import useCustomeHook1 from './useCustomeHook1';
const DocTitleOne = props => {
  const [count, setCount] = useState(0);
  useCustomeHook1(count)

  return (
    <div>
      <button onClick={() => setCount(prev => prev + 1)}>Count: {count}</button>
    </div>
  );
};
export default DocTitleOne;
