import React, { useReducer } from 'react';

const initState = { firstCounter: 0, secondCounter: 10 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'incrementf':
      return { ...state, firstCounter: state.firstCounter + 1 };
    case 'decrementf':
      return { ...state, firstCounter: state.firstCounter - 1 };
    case 'increments':
      return { ...state, secondCounter: state.secondCounter + 1 };
    case 'decrements':
      return { ...state, secondCounter: state.secondCounter - 1 };
    case 'reset':
      return initState;
    default:
      return state;
  }
};

const UseReducer = props => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <>
      <h1>{state.firstCounter}</h1>
      <h1>{state.secondCounter}</h1>

      <button onClick={() => dispatch({ type: 'incrementf' })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrementf' })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'increments' })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrements' })}>
        Decrement
      </button>
    </>
  );
};
export default UseReducer;
