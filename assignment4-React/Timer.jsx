import React, { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 5000);

    const interval2 = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, [count]);

  return (
    <div>
      <h1>Count:{count}</h1>
      <h1>Count:{seconds}</h1>
    </div>
  );
};

export default Timer;
