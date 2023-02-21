import React, { useEffect, useState } from "react";

/**
 * Rules
 * Always use the setter for useState
 * Always put a dependency array on useEffect, useCallback, and useMemo
 * To run useEffect only once, pass an empty array
 *   To run useEffect only when a variable changes, pass that variable in the dependency array
 *   To run useEffect when a variable changes, but not on the first render, pass that variable in the dependency array and set the initial value to undefined
 * Don't depend on data you set
 * Always add all the state your read from to the dependency array
 */

function EffectTutorial() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((response) => {
        setData(response[0].email);
        console.warn("API WAS CALLED");
      });
  }, []);

  return (
    <div>
      Hello World
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default EffectTutorial;
