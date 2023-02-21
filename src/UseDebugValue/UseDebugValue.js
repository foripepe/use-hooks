import React from "react";
import { useState, useDebugValue } from 'react';

const UseDebugValue = () => {

  const [isOnline, setIsOnline] = useState(true);

  useDebugValue(isOnline ? 'Online' : 'Offline');

  return (
    <>
      {isOnline ? 'Online' : 'Offline'}
    </>
   );
};

export default UseDebugValue;
