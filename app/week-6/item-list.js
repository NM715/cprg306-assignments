'use client';
import Item from './item';
import { useState } from 'react';
import items from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const [list, setList] = useState(items);

  const sortByName = () => {
    let newItems = items.toSorted((item1, item2) => {
      if (item1.name > item2.name) 
        return 1;
      else if (item1.name === item2.name)
        return 0;
      else 
        return -1;
    });

    setList(newItems);
    setSortBy("name");
  }

  const sortByCategory = () => {
    let newItems = items.toSorted((item1, item2) => {
      if (item1.category > item2.category) 
        return 1;
      else if (item1.category === item2.category)
        return 0;
      else 
        return -1;
    });

    setList(newItems);
    setSortBy("category");
  }

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

      {list.map((item) => (
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