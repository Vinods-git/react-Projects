import React,{useContext} from 'react'
import {CounterContext} from './ReducerContext';
const D = (props) =>{
const counterContext = useContext(CounterContext)

return (
  <div>
      {counterContext.state.count}

    <button onClick={()=>counterContext.dispatch({ type: 'increment' })}>
      Increment
    </button>
    <button onClick={()=>counterContext.dispatch({ type: 'decrement' })}>
      Decrement
    </button>
    <button onClick={()=>counterContext.dispatch({ type: 'reset' })}>
      Reset
    </button>
  </div>
);

}
export default D ;