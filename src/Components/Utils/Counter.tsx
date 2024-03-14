import { useEffect, useState } from "react";

interface CounterProps {
  end: number;
  duration: number;
  isInView: boolean;
}

const Counter: React.FC<CounterProps> = ({ end, duration, isInView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / end));
    const obj = { count: start };
    const counter = setInterval(() => {
      start++;
      obj.count = start;
      setCount(obj.count);
      if (start === end) {
        clearInterval(counter);
      }
    }, stepTime);
  }, [end, duration, isInView]);

  return <p className="text-gradient text-5xl lg:text-6xl">{`${count} ${end === 15 ? "+" : ""}`}</p>;
};

export default Counter;
