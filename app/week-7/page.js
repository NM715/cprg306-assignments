'use client'
import NewItem from './new_item';
import ItemList from './item-list';
import itemsData from './items.json'
import { useState } from "react";

export default function Page() {

  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
   
    setItems([...items, newItem]);
  }

  return (
    <main className="p-0 bg-slate-950 text-white min-h-screen "> 
      <h1 className="text-4xl font-bold mb-2 mt-4 ml-5">Shopping List</h1>
       <NewItem onAddItem={handleAddItem} />
       <ItemList items={items} />
    </main>
  );
}
   