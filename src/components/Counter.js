import React, { useState } from 'react';

const Counter = () => {
    const [number, setNumber] = useState(0);
    const [diff, setDiff] = useState(1);

    const changeDiff = (e) => {
        const diff = parseInt(e.target.value);
        setDiff(diff);
    }
    const onIncrease = () => {
        setNumber((number) => number + diff)
    }
    const onDecrease = () => {
        setNumber((number) => number - diff)
    }
    
    return(
        <>
            <h1>{number}</h1>
            <h1>{diff}</h1>

            <input
            value={diff}
            placeholder='숫자를 입력하세요'
            onChange={changeDiff}
            ></input>

            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>

        </>
    )
}

export default Counter;