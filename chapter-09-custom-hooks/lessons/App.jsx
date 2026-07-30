import useLocalStorage from "./hooks/useLocalStorage";

function App() {
    const [name, setName] = useLocalStorage('username', '');
    return (
        <div>
            <h1>useLocalStorage Hook</h1>
            
            <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <p>Your name: {name || 'Not set'}</p>
            <p>(Refresh the page — your name stays!)</p>
        </div>
    );
}

export default App;