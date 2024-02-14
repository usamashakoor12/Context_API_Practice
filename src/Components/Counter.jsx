import React,{ useContext }from 'react';
import { countContext } from '../COntext/Context'; 

const Counter = () => {

    const counterContext = useContext(countContext)

  return (
    <div>
      <button onClick={()=>counterContext.setCounter(counterContext.counter + 1)}>Increment</button>
      <button onClick={()=>counterContext.setCounter(counterContext.counter - 1)}>dicrement</button>
    </div>
  );
}

export default Counter;
