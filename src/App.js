import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrement, increment } from "./redux/counter.actions";

const App = () => {
  const [inputValue, setInputValue] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div className="container">
      <button className="btn" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <span className="count">{count}</span>
      <button className="btn" onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="number"
      />
      <button
        className="btn"
        onClick={() => dispatch(increase(inputValue))}
      >
        Increase
      </button>
      <button>Reset</button>
    </div>
  );
};

export default App;
