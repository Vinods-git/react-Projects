import { useState } from 'react';
const useCustomHook2 = (initCount = 0) => {
  const [count, setCount] = useState(initCount);
  const incrementHandler = () => {
    setCount(prev => prev + 1);
  };
  const decrementHandler = () => {
    setCount(prev => prev - 1);
  };
  const resetHandler = () => {
    setCount(initCount);
  };

  return [count, incrementHandler, decrementHandler, resetHandler];
};
export default useCustomHook2;
