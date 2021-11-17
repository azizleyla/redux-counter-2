import React, { useState, useDispatch } from "react";
import { useSelector } from "react-redux";
const App = () => {
  const [inputValue, setInputValue] = useState(0);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.counter);
  
  return (
    <div className="container">
      <button className="btn">Increment</button>
      <span className="count"></span>
      <button className="btn">Decrement</button>

      <input value={inputValue} type="number" />
      <button className="btn">Increase</button>
      <button>Reset</button>
    </div>
  );
};

export default App;
