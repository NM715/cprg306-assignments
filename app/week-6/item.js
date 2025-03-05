export default function Item({ name, quantity, category }) {
    return (

      <li className="p-2 m-4 bg-slate-900 max-w-md list-none"> 
        <div className="text-2xl font-bold">
          {name} 
        </div>
        <div className="text-lg">
          Buy {quantity} in {category}
        </div>
      </li>
    );
}