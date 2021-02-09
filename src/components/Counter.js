import React, { useReducer, useState } from "react";
import CounterContainer from "./CounterContainer";
import { CounterReduce, doIncrease, doDecrease, changeDiff } from "./reducer";

const Counter = () => {
  // 초기 선언 값
  // const [number, setNumber] = useState(0);
  // const [diff, setDiff] = useState(1);
  // const [counter, setCounter] = useState({'number':0, 'diff': 1})
  // const {number, diff} = counter

  const [{ number, diff }, dispatch] = useReducer(CounterReduce, {
    number: 0,
    diff: 1,
  });

  const onIncrease = () => {
    dispatch(doIncrease());
  };
  const onDecrease = () => {
    dispatch({ type: "decrease" });
  };

  const onChange = (e) => {
    const value = parseInt(e.target.value);
    dispatch({ type: "diff", payload: value });
  };

  return (
    <>
      <CounterContainer
        number={number}
        diff={diff}
        onChange={onChange}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </>
  );
};

export default Counter;
