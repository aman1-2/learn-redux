import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { decrement, increment, reset} from '../Redux/Slice/CounterSlice';

export const Counter = () => {
  /*(i) useSelector Hook is the part of the redux which is used to fetch out the exact value
  of the current state.
  syntax :- const data=useSelector<{here we define a arrow function which extracts the value
  from the current states value} <state.<slice-name>.value 

  (ii) useDispatch Hook is the part of the redux with whose help we can use the functions of
  redux slice defined. 
  
  */
  const data=useSelector((state)=>(state.counter.value));
  const dispatch=useDispatch();
  return (
    <div>
        <button onClick={()=>(dispatch(increment()))}>Increment</button>
        <br></br><br></br>

        <div>{data}</div>
        <br></br><br></br>

        <button onClick={()=>(dispatch(decrement()))}>Decrement</button>
        <br></br><br></br>

        <button onClick={()=>(dispatch(reset()))}>Reset</button>
    </div>
  )
}
