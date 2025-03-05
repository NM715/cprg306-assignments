import ItemList from './item-list';

export default function Page() {
  return (
    <main className="p-2 bg-slate-950 text-white min-h-screen"> 
      <h1 className="text-4xl font-bold mb-2 mt-4 ml-5">Shopping List</h1>
      <ItemList />
    </main>
  );
}