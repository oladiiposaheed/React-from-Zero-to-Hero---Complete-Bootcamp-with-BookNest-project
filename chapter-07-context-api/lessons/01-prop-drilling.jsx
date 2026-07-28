import { useState } from "react";


// ===== GRANDCHILD — needs the data =====
function GrandChild({ message }) {
    return <h1>Message: {message}</h1>;
}

// ===== CHILD — doesn't need data, just passes it =====
function Child({ message }) {
    return <GrandChild message={message} />
}

// ===== PARENT — owns the data =====
function App() {
    const [message, setMessage] = useState('Hello from App!');

    return (
        <div>
            {/* Pass through Child to GrandChild */}
            <Child message={message} />
        </div>
    );
}

export default App;