// ===== REDUCER FUNCTION =====
// A reducer takes (state, action) and returns new state

import { useReducer } from "react";

function cartReducer(state, action) {
    // Check what type of action was sent
    switch (action.type) {       // Check the type of action
        case 'ADD':     // If type is 'ADD'
            // Return old state + new book at the end
            return [...state, action.book];

        case 'REMOVE':
            // Keep only books that DON'T match the ID
            return state.filter(item => item.id !== action.id);

        case 'CLEAR':
            // Return empty array
            return [];

        default:
            // Unknown action — don't change anything
            return state;
    }
}


function App() {
    // useReducer(reducer, initialValue)
    const [cart, dispatch] = useReducer(cartReducer, []);

    return (
        <div>
            <h1>Reducer Demo</h1>
            <p>Cart: {cart.length} items</p>

            <button onClick={() => dispatch({ type: 'ADD', book: { id: 1, title: 'React Book' } })}>
                Add Book #1
            </button>
            <button onClick={() => dispatch({ type: 'ADD', book: { id: 2, title: 'Python Book' } })}>
                Add Book #2
            </button>
            <button onClick={() => dispatch({ type: 'REMOVE', id: 1 })}>
                Remove Book # 1
            </button>
            <button onClick={() => dispatch({ type: 'CLEAR' })}>
                Clear Cart
            </button>

            <h2>Cart Items:</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;