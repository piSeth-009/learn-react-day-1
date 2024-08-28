import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(10);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-bg-color">
      <h1 className="text-xl font-semibold mb-[350px] ">Basic Counter</h1>
      <div className="text-6xl font-bold mb-20">{count}</div>
      <div className=" grid grid-cols-2 sm:grid-cols-4 gap-14">
        <button
          onClick={() => setCount(count + 1)}
          className="w-14 h-14 bg-gray-800 text-white text-3xl p-2 rounded mb-96"
        >
          +
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="w-14 h-14 bg-gray-800 text-white text-3xl p-2 rounded"
        >
          -
        </button>
        <button
          onClick={() => setCount(count * 2)}
          className="w-14 h-14 bg-gray-800 text-white text-4xl p-2 rounded"
        >
          *
        </button>
        <button
          onClick={() => setCount(count / 2)}
          className=" w-14 h-14 bg-gray-800 text-white text-3xl p-2 rounded"
        >
          /
        </button>
      </div>
    </div>
  );
};

export default Counter;
