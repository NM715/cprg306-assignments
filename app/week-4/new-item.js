"use client"; 
import { useState } from "react";

export default function NewItem() {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="w-44 h-12 mx-auto mt-3 bg-white p-2 ">
      <div className="flex items-center justify-between"> 
       
        <p className="text-xl text-black">
          {count}
        </p>

        <div className="flex items-center gap-2">
          <button
            onClick={decrement}
            disabled={count <= 1}
            className="bg-blue-500 hover:bg-blue-700 rounded-lg text-white font-bold py-1 px-4 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >-</button>

          <button
            onClick={increment}
            disabled={count>= 20}
            className="bg-blue-500 hover:bg-blue-700 rounded-lg text-white font-bold py-1 px-4  disabled:bg-gray-400 disabled:cursor-not-allowed"
          >+</button>
        </div>
      </div>
    </div>
  );
}