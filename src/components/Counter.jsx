import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount, decreaseCount } from "../store/counter/counter.action";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(increaseCount(1));
  };

  const handleSubtract = () => {
    dispatch(decreaseCount(1));
  };

  console.log(count);
  //() => dispatch({ type: "DECREASE", payload: 1 }
  return (
    <>
      <div>Count : {count}</div>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleAdd}>+</button>
    </>
  );
};

export default Counter;
