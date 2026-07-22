// import Header from './components/Header';    
// import BookCard from './components/BookCard';
// import BookList from './components/BookList';

// function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6 md:p-10">
//       <div className="max-w-7xl mx-auto">
//         <Header />
//         <BookList />
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";

function App() {
  // Create state: count starts at 0
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center">
      <div className="flex gap-4 bg-white rounded-2xl shadow-lg p-10 text-center">

        {/* Show current count */}
        <p className="text-6xl font-bold text-purple-600 mb-6">
          {count}
        </p>

        {/* Increase button */}
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 text-lg"
        >
          + Increase
        </button>
      </div>
    </div>
  );
}

export default App;