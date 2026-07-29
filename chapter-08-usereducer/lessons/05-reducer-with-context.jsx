import { useReducer, createContext, useContext, Children } from "react";


// ===== REDUCER =====
function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD': return [...state, action.book];
        case 'REMOVE': return state.filter(item => item.id !== action.id);
        case 'CLEAR': return [];
        default: return state;
    }
}


// ===== CONTEXT =====

// Create an empty storage box called CartContext
const CartContext = createContext();

// CartProvider = a component that wraps the app and shares cart data
function CartProvider({ children }) {
    // useReducer gives us:
    //   cart    = current array of books
    //   dispatch = function to send actions to the reducer
    // cartReducer = reducer fn, [] = initial value (empty array)
    const [cart, dispatch] = useReducer(cartReducer, []);
    return (
        // Share cart + dispatch with ALL children
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

// ===== COMPONENTS =====
function Header() {
    // Take only "cart" from context — Header doesn't need dispatch
    const { cart } = useContext(CartContext);
    // Header just READS cart to show the count
    return <p>🛒 Cart: {cart.length} items</p>;
}

function Product({ name, id }) {
    // Take only "dispatch" from context — Product
    const { dispatch } = useContext(CartContext);
    // Product sends actions to add items
    return (
        <div>
            <span>{name}</span>
            {/* When clicked: send ADD action to reducer */}
            <button onClick={() => dispatch({ 
                type: 'ADD',         // Action type: add a book
                // The book data to add
                book: {id, title: name} })}>        
                Add
            </button>
        </div>
    );
}

// ===== APP =====
function App() {
    return (
        // CartProvider wraps everything — makes cart + dispatch available
        <CartProvider>
            {/* Header reads cart — shows count */}
            <Header />
            {/* Products dispatch ADD actions when clicked */}
            <Product name='React Book' id={1} />
            <Product name='Python for beginners Book' id={2} />
        </CartProvider>
    );
}

export default App;