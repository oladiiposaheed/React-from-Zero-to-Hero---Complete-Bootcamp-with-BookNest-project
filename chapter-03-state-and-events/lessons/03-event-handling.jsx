import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
        {/* Current count display */}
        <p className="text-6xl font-bold text-purple-600 mb-8">
          {count}
        </p>

        {/* Button row — gap-4 = 16px space between buttons */}
        <div className="flex gap-4 justify-center bg-blue-200 p-4 rounded-lg">
          {/* Decrease button */}
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 font-bold"
          >
            -
          </button>

          {/* Reset button */}
          <button 
            onClick={() => setCount(0)}
            className="bg-gray-400 text-white px-6 py-3 rounded-lg hover:bg-gray-500 font-bold"
          >
            Reset
          </button>

          {/* Increase button */}
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 text-lg font-bold"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;