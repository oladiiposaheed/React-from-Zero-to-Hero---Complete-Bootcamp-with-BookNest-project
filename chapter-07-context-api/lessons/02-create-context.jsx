import { useState, createContext, useContext } from "react";


// ===== STEP 1: Create context (the shared storage box) =====
const MessageContext = createContext();

// ===== GrandChild — reads directly from context =====
function GrandChild() {
    const message = useContext(MessageContext);  // Read from context
    return <h1>Message: {message}</h1>;
}

// ===== Child — NO props needed! =====
function Child() {
    return <GrandChild />    // No props passed!
}

// ===== App — provides the data =====
function App() {
    const [message, setMessage] = useState('Hello from Context!');

    return (
        // ===== STEP 2: Provider wraps children, gives them access =====
        <MessageContext.Provider value={message}>
            <Child />        {/* Child and GrandChild can access message directly */}
        </MessageContext.Provider>
    );
}

export default App;