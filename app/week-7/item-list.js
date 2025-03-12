'use client';
import Item from './item';
import { useState } from 'react';

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortByName = () => {
    setSortBy("name");
  }

  const sortByCategory = () => {
    setSortBy("category");
  }

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      if (a.name > b.name) return 1;
      if (a.name === b.name) return 0;
      return -1;
    } else {
      if (a.category > b.category) return 1;
      if (a.category === b.category) return 0;
      return -1;
    }
  });

  return (
    <div className="mt-12 ml-5 ">
      <div className="flex gap-5 mb-4">
        <div className="text-xl">Sort By:</div>
        <button
          onClick={sortByName}
          className={`text-xl w-36 h-10 ${sortBy === "name" ? 'bg-orange-500' : 'bg-orange-700'}`}
        >
          Name
        </button>
        <button
          onClick={sortByCategory}
          className={`text-xl w-36 h-10  ${sortBy === "category" ? 'bg-orange-500' : 'bg-orange-700'}`}
        >
          Category
        </button>
      </div>

      {sortedItems.map((item) => (
        <Item 
          key={item.id}  
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </div>
  );
}