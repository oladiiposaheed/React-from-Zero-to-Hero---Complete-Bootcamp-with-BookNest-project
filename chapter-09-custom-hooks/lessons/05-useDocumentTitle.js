import { useEffect } from "react";


function useDocumentTitle(title) {
    // title = the text to show in the browser tab

    useEffect(() => {
        // Update the browser tab title
        document.title = title;
        // Example: document.title = '🛒 3 items — BookNest'
    }, [title]);
    // Re-run when title changes
}

export default useDocumentTitle;



// App
import { useState } from "react";
import useDocumentTitle from "./hooks/useDocumentTitle";

function App() {
    const [count, setCount] = useState(0);

    // Update tab title whenever count changes
    useDocumentTitle(`Count: ${count} - My App`);

    return (
        <div>
            <h1>useDocumentTitle Demo</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                + Increase
            </button>
        </div>
    );
}

export default App;
