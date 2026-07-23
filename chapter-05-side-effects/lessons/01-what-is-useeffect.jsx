import { useState, useEffect } from "react";


function App() {
  const [count, setCount] = useState(0);

  // useEffect: runs AFTER every render
  useEffect(() => {
    console.log('useEffect ran! Count is:', count);
  });

  return (
    <div>
      <h1>useEffect Demo</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+ Increase</button>
    </div>
  );
}

export default App;