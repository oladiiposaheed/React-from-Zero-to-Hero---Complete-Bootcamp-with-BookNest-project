import { useState, useEffect } from "react";


function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Fatimah');

  // Runs ONLY ONCE
  useEffect(() => {
    console.log('🟢 Runs ONCE — component mounted');
  }, []);

  // Runs when COUNT changes
  useEffect(() => {
    console.log('🔵 Count changed to:', count);
  }, [count]);

  // Runs when NAME changes
  useEffect(() => {
    console.log('🟣 Name changed to:', name);
  }, [name]);

  return (
    <div>
      <h1>Dependency Array Demo</h1>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+ Increase</button>

      <p>Name: {name}</p>
      <button onClick={() => setName(name === 'Fatimah' ? 'Saheed' : 'Fatimah')}>
        Toggle Name
      </button>
    </div>
  )
}



export default App;