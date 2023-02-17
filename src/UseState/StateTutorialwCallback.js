import React, { useState, useCallback } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Rocket Raccoon");

  let onChange = useCallback((event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  }, []);

  return (
    <div>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default StateTutorial;
