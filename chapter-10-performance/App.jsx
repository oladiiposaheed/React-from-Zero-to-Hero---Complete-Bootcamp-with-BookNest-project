import { useState, memo } from "react";

// Regular child — re-renders every time parent renders
// function Child({ name }) {
//     console.log('Chil rendered:', name);
//     return <p>Hello, {name}</p>;
// }

// Wrap Child with memo
const Child = memo(function Child({ name }) {
    console.log('Child rendered:', name);
    return <p>Hello, {name}</p>
})



function App() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Fatimah');

    return (
        <div>
            <h1>React.memo Demo</h1>

            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                + Increase Count
            </button>

            {/* Child gets name="Fatimah" — never changes */}
            <Child name={name} />

            <p>(Open Console F12 — Child re-renders every click even though name never changes)</p>
        </div>
    );
}

export default App;