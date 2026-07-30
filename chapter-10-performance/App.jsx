import { useState, useCallback, memo } from "react";


// Child wrapped with memo — only re-renders if props change
const Child = memo(function Child({ onClick }) {
    console.log('Child rendered');
    return <button onClick={onClick}>Click Me</button>;
});


function App() {
    const[count, setCount] = useState(0);
    const [other, setOther] = useState(0);

    // Without useCallback — function recreated every render
    // const handleClick = () => setCount(count + 1);
    const handleClick = useCallback(() => {
        // This function adds 1 to count
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <h1>useCallback Demo</h1>

            <p>Count: {count}</p>
            <Child onClick={handleClick} />

            <p>Other: {other}</p>
            <button onClick={() => setOther(other + 1)}>
                Change Other
            </button>
        </div>
    );
}

export default App;