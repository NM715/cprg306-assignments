"use client";
import { useState } from "react";

export default function NewItem({onAddItem}) {
  const [name, setName] = useState("");
  const [count, setCount] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (count < 20) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.random().toString(36).substring(2, 15),
      name: name,
      quantity: count,
      category: category
    };
  
    setName("");
    setCount(1);
    setCategory("produce");
    onAddItem(newItem);
  };

  return (
    <div className="flex items-center justify-right w-auto mt-0 ml-10 ">
      <div className="mt-3 bg-slate-900 p-3 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="text-black">
            <input
              type="text"
              value={name}
              placeholder="Item Name"
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-4 border rounded-lg"
            />
          </div>

          <div className="flex items-start">
            <div className="w-40 h-12 mx-auto mt-2 ml-2 rounded-lg bg-white p-2">
              <div className="flex items-center justify-between">
                <p className="text-xl text-black">{count}</p>
                <div className="flex items-center gap-2">
                  <button
                    type="button" 
                    onClick={decrement}
                    disabled={count <= 1}
                    className="bg-blue-500 hover:bg-blue-700 rounded-lg text-white font-bold py-1 px-4 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    -
                  </button>

                  <button
                    type="button" 
                    onClick={increment}
                    disabled={count >= 20}
                    className="bg-blue-500 hover:bg-blue-700 rounded-lg text-white font-bold py-1 px-4 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="w-auto flex items-start ml-16 rounded-lg p-2">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="p-5 border rounded-lg text-black"
              >
                <option value="category" disabled>
                  Category
                </option>
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen Foods">Frozen Foods</option>
                <option value="canned Goods">Canned Goods</option>
                <option value="dry Goods">Dry Goods</option>
                <option value="snacks">Snacks</option>
                <option value="beverages">Beverages</option>
                <option value="household Goods">Household Goods</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            +
          </button>
        </form>
      </div>
    </div>
  );
}


