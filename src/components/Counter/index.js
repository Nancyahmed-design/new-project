
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {setCurrntCounter} from "../../store/actions/Counter";


 const Counter = (props) => {
    const {
      counter:{number},
    } = useSelector((state) => state)
    
    const dispatch = useDispatch();
    let value=number;

    const decrement =()=>{
      if(value >0)
      dispatch(setCurrntCounter(value - 1));

    }


    const increment =()=>{
     dispatch(setCurrntCounter(value + 1));
      
    }
    const reset =()=>{
      dispatch(setCurrntCounter(0));
       
     }
  return (
      
      <div className="container ">
          <h2 className="">Counter app</h2>
          <div className="mt-3">
          <div className="container mb-3">{number}</div>
          <button type="button"  className="btn btn-light     mr-1" style={{width:30}}   onClick={decrement}>-</button>
          <button type="button" className="btn btn-light     mr-1" style={{width:30}} onClick={increment}>+</button>
          <button type="button" className="btn btn-light   " style={{width:70}} onClick={reset}>Reset</button>
          </div>

      </div> 
  );
}

export default Counter;


