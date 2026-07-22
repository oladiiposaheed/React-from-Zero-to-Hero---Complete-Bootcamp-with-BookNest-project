import { useState } from "react";

// 2. DISPLAY COMPONENT
// This component only SHOWS data. It never changes it.
// It receives "count" as a prop from the parent (App).
function Display({ count }) {
  return (
    // White card to show the number
    <div className="bg-white rounded-xl shadow p-6 text-center mb-4">
      <p className="text-gray-500 text-sm">Current Count</p>
      {/* Show the count prop */}
      <p className="text-5xl font-bold text-purple-600">{count}</p>
    </div>
  );
}


// 3. CONTROLS COMPONENT — changes the count
// STEP 1: DEFINE the component (create the tool)

function Controls({ onIncrease, OnDecrease, onReset }) {
  return (
    // flex = buttons in a row, gap-3 = 12px space between
    <div className="flex gap-3 justify-center">
      
      {/* Decrease button — calls the function passed from App */}
      <button
        onClick={OnDecrease}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        -
      </button>

      {/* Reset button — calls the function passed from App */}
      <button 
        onClick={onReset}
        className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
      >
        Reset
      </button>

      {/* Increase button — calls the function passed from App */}
      <button 
        onClick={onIncrease}
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
      >
        +
      </button>
    </div>
  )
}

// 1. APP
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-80">

        {/* Use Display component — pass count as prop */}
        <Display count={count} />

        {/* // STEP 2: USE the component (use the tool) */}
        {/* Pass functions DOWN to Controls */}
        <Controls 
          onIncrease={() => setCount(count + 1)}   // Function to increase
          OnDecrease={() => setCount(count - 1)}   // Function to decrease
          onReset={() => setCount(0)}       // Function to reset
        />
      </div>
    </div>
  );
}

export default App;