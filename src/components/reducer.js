import React from 'react';

// Action Increase 객체는 {'type': 'increase'}
// Action Decrease 객체는 {'type': 'decrease'}
// Action diff 객체는 {'type': 'diff', 'payload': 3}

const initialState = ({'number': 0, 'diff': 1});

const CounterReduce = (state = initialState, action) => {
    switch(action.type){
        case 'increase':
            return {...state, number: state.number + state.diff};
        case 'decrease':
            return {...state, number: state.number - state.diff};
        case 'diff':
            return {...state, diff: action.payload};
        default:
            return state;   
    }   
}

// action 객체가 'type': 'increase'
// action 객체가 'type': 'decrease'
// action 객체가 'type': 'diff'
const doIncrease = () => ({'type': 'increase'});
const doDecrease = () => ({'type': 'decrease'});
const changeDiff = (payload) => ({'type': 'diff'});

export {CounterReduce, doIncrease, doDecrease, changeDiff};

