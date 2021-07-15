import React from 'react';
import useCustomHook2 from './useCustomHook2';
const CounterOne = props => {
  const [
    count,
    incrementHandler,
    decrementHandler,
    resetHandler
  ] = useCustomHook2(20);
  return (
    <>
      <p>Count : {count}</p>

      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={resetHandler}>Reset</button>
    </>
  );
};
export default CounterOne;
