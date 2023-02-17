import React from "react";
import { useTransition, useState } from "react";

function UseTransitionExample() {
    const [isPending, startTransition] = useTransition();
    const [count, setCount] = useState(0);

    function handleClick() {
        startTransition( async () => {
            setCount(c => c + 1);
        });
    }

    return (
      <div>
        {isPending && (<div>Loading</div>)}
        <button onClick={handleClick}>{count}</button>
      </div>
    );
}

export default UseTransitionExample;
