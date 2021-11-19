import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {

  reset,
  toggle,
  action,
} from "./redux/counter.actions";

const App = () => {
  const [inputValue, setInputValue] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const curOperation = useSelector((state) => state.curOperation);
  // const [curOperaton, setCurOperation] = useState("s");

  return (
    <div className="container">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="number"
      />
      <span className="count">{count}</span>
      {/* 
      <button
        className="btn"
        onClick={() => {
          dispatch(multiply(inputValue));
          setCurOperation("m");
        }}
      >
        Multiply
      </button>

      <button
        className="btn"
        onClick={() => {
          dispatch(sum(inputValue));
          setCurOperation("s");
        }}
      >
        Sum
      </button> */}
      <button
        className="btn"
        onClick={() => {
          dispatch(action(inputValue));
        }}
      >
        Action
      </button>
      <button
        className="btn"
        onClick={() => {
          dispatch(toggle());
        }}
      >
        Toggle operation
      </button>

      <span>{curOperation}</span>
      <button
        onClick={() => {
          dispatch(reset());
          setInputValue(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default App;
