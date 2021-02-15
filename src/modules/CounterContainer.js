import React from "react";

const CounterContainer = ({number, diff, onChange, onIncrease, onDecrease}) => {
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

export default CounterContainer;
