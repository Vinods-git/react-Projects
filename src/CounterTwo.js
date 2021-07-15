import React from 'react';
import useCustomHook2 from './useCustomHook2';
const CounterTwo = props => {
  const [
    count,
    incrementHandler,
    decrementHandler,
    resetHandler
  ] = useCustomHook2();
  return (
    <>
      <p>Count : {count}</p>

      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={resetHandler}>Reset</button>
    </>
  );
};
export default CounterTwo;
