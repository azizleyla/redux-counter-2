import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const App = () => {
  const [inputValue, setInputValue] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div className="container">
      <button
        className="btn"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>
      <span className="count">{count}</span>
      <button
        className="btn"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
      </button>

      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="number"
      />
      <button
        className="btn"
        onClick={() => dispatch({ type: "INCREASE", payload: inputValue })}
      >
        Increase
      </button>
      <button>Reset</button>
    </div>
  );
};

export default App;
