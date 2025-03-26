'use client';
import { useState } from "react";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";
import itemsData from "./items.json";
import  {useUserAuth} from "../_utils/auth-context";

export default function Page() {
    const { user } = useUserAuth(); 

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };


  if (!user) {
    return (
      <main className="p-4 bg-slate-950 min-h-screen text-white">
        <p className="text-xl">You must be logged in to view this page</p>
      </main>
    );
  }
  const handleItemSelect = (itemName) => {
    const cleanedName = itemName
      .split(",")[0] 
      .trim()
      .replace(
        /([\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F700}-\u{1F77F}]|[\u{1F780}-\u{1F7FF}]|[\u{1F800}-\u{1F8FF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA00}-\u{1FA6F}]|[\u{1FA70}-\u{1FAFF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{2300}-\u{23FF}]|[\u{2B50}])/gu,
        ''
      );
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="p-4 bg-slate-950 min-h-screen text-white mt-2 ml-2">
      <h1 className="text-4xl font-bold mb-4">Shopping List</h1>
      <div className="flex gap-8">
        <div className="flex-1 max-w-md">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1 max-w-md">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
