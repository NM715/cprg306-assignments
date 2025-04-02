export default function Item({ name, quantity, category, onSelect }) {
    return (
      <li
        className="p-2 m-4 bg-slate-900 max-w-md list-none cursor-pointer hover:bg-gray-800"
        onClick={onSelect}
      >
        <div className="text-2xl font-bold">{name}</div>
        <div className="text-lg">
          Buy {quantity} in {category}
        </div>
  
      </li>
    );
  }
  