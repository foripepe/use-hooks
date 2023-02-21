import { useCallback, useState } from "react";
import Child from "./Child";

export default function CallBackTutorial() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Rocket Raccoon");

  const returnComment = useCallback(
    (name) => {
      return data + " - " + name;
    },
    [data]
  );

  const test = useCallback(() => {
    console.warn("test");
  }, []);

  return (
    <div className="App">
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          test();
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
}
