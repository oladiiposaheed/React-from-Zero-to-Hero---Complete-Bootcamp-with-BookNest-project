import { useState, useMemo } from "react";


function App() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(10);

    // useMemo saves the result until "number" changes
    const doubled = useMemo(() => {
        console.log('Calculating...');   // Shows when calculation runs
        return number * 2;
    }, [number]);     // Only recalculate when number changes


    return (
        <div>
            <h1>useMemo Demo</h1>

            <p>Number: {number}</p>
            <p>Doubled: {doubled}</p>

            <button onClick={() => setNumber(number + 1)}>
                Increase Number
            </button>
        </div>
    );
}

export default App;