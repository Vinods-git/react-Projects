import React, { useReducer } from 'react';
import A from './A';
import C from './C';
import E from './E';
const initState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initState;
  }
};
export const CounterContext = React.createContext();
const ReducerContext = props => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <>
      <h1>{state.count}</h1>
      <CounterContext.Provider value={{ state: state, dispatch: dispatch }}>
        <A />
        <C />
        <E />
      </CounterContext.Provider>
    </>
  );
};
export default ReducerContext;
