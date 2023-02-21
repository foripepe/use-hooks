import React, { useEffect } from "react";

function Child({ returnComment }) {
  return <div>{returnComment("Online Editor Team")}</div>;
}

export default Child;
