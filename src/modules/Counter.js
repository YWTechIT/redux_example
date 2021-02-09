import { useDispatch, useSelector } from "react-redux";
import CounterContainer from "./CounterContainer";
import { CounterReducer, doIncrease, doDecrease, changeDiff } from "./CounterReducer";

const Counter = () => {
  // 초기 선언 값
  // const [number, setNumber] = useState(0);
  // const [diff, setDiff] = useState(1);
  // const [counter, setCounter] = useState({'number':0, 'diff': 1})
  // const {number, diff} = counter
  // const [{ number, diff }, dispatch] = useReducer(CounterReducer, {
  //   number: 0,
  //   diff: 1,
  // });

  const counter = useSelector((state) => state.Counter);
  const dispatch = useDispatch();
  
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
        number={counter.number}
        diff={counter.diff}
        onChange={onChange}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </>
  );
};

export default Counter;
