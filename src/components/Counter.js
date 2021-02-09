import React, { useState } from 'react';

const Counter = () => {

    // 초기 선언 값
    // const [number, setNumber] = useState(0);
    // const [diff, setDiff] = useState(1);
    const [counter, setCounter] = useState({'number':0, 'diff': 1})
    const {number, diff} = counter
    
    const changeDiff = (e) => {
        const diff = parseInt(e.target.value);
        setCounter((counter) => ({...counter, diff: diff})) ;
    }
    const onIncrease = () => {
        setCounter((counter) => ({...counter, number: number + diff}))
    }
    const onDecrease = () => {
        setCounter((counter) => ({...counter, number: number - diff}))
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