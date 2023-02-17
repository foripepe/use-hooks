import React, { useEffect } from "react";

function Child({ returnComment }) {
  useEffect(() => {
    console.warn("FUNCTION WAS CALLED");
  }, [returnComment]);

  return <div>{returnComment("Online Editor Team")}</div>;
}

export default Child;
