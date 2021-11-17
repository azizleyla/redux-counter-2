import React, { useState } from "react";
const App = () => {
  const [inputValue, setInputValue] = useState(0);

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
