import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { increment , decrement , incrementByAmount } from "./actions";
import { useState } from 'react'

const App1 = () =>{
    const [ Incrementvalue , setIncrementvalue ] = useState('2');
    const counter = useSelector(state => state.counter);
    const logged = useSelector( state => state.logged);
    const dispatch = useDispatch();
    return(
      <div>
        <div>
          <h1>hollo</h1>
          <h2>counter {counter}</h2>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          <input type="text" ></input>
        
          {logged ? <h3>logged in </h3> : 'nope'}
          
          </div>  
          <div>
            <input value={Incrementvalue} onChange={e => setIncrementvalue(e.target.value)} > </input>
            <button onClick={() => dispatch(incrementByAmount(Number(Incrementvalue) || 0))}></button>
          </div>
      </div>
          );
}


export default App1;
