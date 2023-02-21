import React, { useState } from "react";

const ReducerTutorial = () => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  return (
    <div>
      <h1>{count}</h1>

      <button
        onClick={() => {
          setCount(count + 1);
          setShowText(!showText);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(countCurret => (countCurret - 1));
          setShowText(!showText);
        }}
      >
        Decrement
      </button>

      {showText && <p>This is a text</p>}
    </div>
  );
};

export default ReducerTutorial;
