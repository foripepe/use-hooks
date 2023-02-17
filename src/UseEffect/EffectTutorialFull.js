import React, { useEffect, useState } from "react";

/**
 * Rules
 * Always use the setter for useState
 * Always put a dependency array on useEffect, useCallback, and useMemo
 * To run usuEffect only once, pass an empty array
 *   To run useEffect only when a variable changes, pass that variable in the dependency array
 *   To run useEffect when a variable changes, but not on the first render, pass that variable in the dependency array and set the initial value to undefined
 * Don't depend on data you set
 * Always add all the state your read from to the dependency array
 */

function EffectTutorialFull() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://jsonplaceholder.typicode.com/comments", { signal })
      .then((response) => response.json())
      .then((response) => {
        setData(response[0].email);
        console.warn("API WAS CALLED");
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.warn("ABORTED");
        } else {
          console.warn("ERROR", error);
        }
      });

      return () => {
        console.warn("CLEANUP");
        controller.abort();
      };
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

export default EffectTutorialFull;
