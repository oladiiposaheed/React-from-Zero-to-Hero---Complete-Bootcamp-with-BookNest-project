import { useState } from "react";

function App() {

  // State: holds what user types
  const [text, setText] = useState('');

  return (
    <div className="bg-amber-200 p-4">
      {/* Input — controlled by React */}
      <input 
        type="text" 
        value={text}             // Shows state value
        onChange={(e) => setText(e.target.value)}    // Updates state
        placeholder="Type something...."
        className="bg-white p-4 rounded-2xl"
      />

      {/* Show what user typed  */}
      <p>You typed: {text}</p>
    </div>
  );
}

export default App;