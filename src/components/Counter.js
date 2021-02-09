import React, { useReducer, useState } from "react";
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
    dispatch({'type': 'decrease'});
  };

  const onChange = (e) => {
    const value = parseInt(e.target.value);
    dispatch({ type: "diff", payload: value });
  };

  return (
    <>
      <h1>{number}</h1>
      <h1>{diff}</h1>

      <input
        value={diff}
        placeholder="숫자를 입력하세요"
        onChange={onChange}
      ></input>

      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </>
  );
};

export default Counter;
