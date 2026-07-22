import { useState } from "react";

function App() {
  // Array state — starts with 3 items
  const [items, setItems] = useState(['Apple', 'Banana', 'Orange']);
  const [nextId, setNextId] = useState(4);       // Track next number

  // Add item: copy old array + add new item
  const addItem = () => {
    setItems([...items, `Item ${nextId}`]);   // Spread + new item
    setNextId(nextId + 1)        // Increment for next time
  };

  // Remove last item: create new array without last element
  const removeItem = () => {
    setItems(items.slice(0, -1))          // All except last
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-96">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          My List ({items.length})
        </h1>

        {/* Show all items */}
        <ul className="space-y-2 mb-6">
          {items.map((item, index) => (
            <li key={index} className="bg-gray-100 p-3 rounded-lg text-gray-700">
              {item}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex gap-4">
          <button 
            onClick={addItem}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex-1"
          >
            + Add
          </button>
          <button 
            onClick={removeItem}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 flex-1"
          >
            - Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default  App;