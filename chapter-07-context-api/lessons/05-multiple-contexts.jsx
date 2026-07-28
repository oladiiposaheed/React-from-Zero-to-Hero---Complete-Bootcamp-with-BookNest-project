import { useState, createContext, useContext } from "react";


// ===== Create TWO contexts =====
const CartContext = createContext();  // For cart data
const ThemeContext = createContext(); // For theme (dark/light)

// ===== Header — reads from BOTH contexts =====
function Header() {
    const { cart } = useContext(CartContext);     // Read cart
    const { theme } = useContext(ThemeContext);   // Read theme

    const bgColor = theme === 'dark' ? '#333' : '#ddd';
    const textColor = theme === 'dark' ? 'white' : 'black';

    return (
        <div style={{ background: bgColor, color: textColor, padding: '10px' }}>
            🛒 Cart: {cart.length} items | Theme: {theme}
        </div>
    );
}

// ===== Product — reads from CartContext only =====
function Product({ name }) {
    const { addToCart } = useContext(CartContext);

    return (
        <div style={{ padding: '10px', border: '1px solid #ccc', margin: '5px' }}>
            <p>{name}</p>
            <button onClick={() => addToCart({ id: Date.now(), name })}>
                Add to cart
            </button>
        </div>
    );
}

// ===== ThemeToggle — reads/writes ThemeContext =====
function ThemeToggle() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        // When clicked, flip the theme: dark→light or light→dark
        <button onClick={() => setTheme(theme==='dark' ? 'light' : 'dark')}>
            {/* Button text changes based on current theme */}
            Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
    );
}


// ===== App =====
function App() {
    // Cart state: array of items, starts empty
    const [cart, setCart] = useState([]);
    // Theme state: starts as 'light'
    const [theme, setTheme] = useState('light');   // Theme state

    // Add item to cart (immutable update)
    const addToCart = (item) => setCart([...cart, item]);
    // Remove item by ID (keep items that don't match)
    const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));

    return (
        // ===== Theme wraps Cart =====

        // OUTER Provider: shares theme data with all children
        <ThemeContext.Provider value={{ theme, setTheme }}>

            {/* INNER Provider: shares cart data with all children */}
            <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
                
                {/* All children can access BOTH contexts */}
                <Header />   {/* Reads: cart + theme */}
                <ThemeToggle />    {/* Reads/Writes: theme */}

                {/* Reads: addToCart */}
                <Product name='Clean Code' />
                <Product name='React Up & Running' />
            </CartContext.Provider>
        </ThemeContext.Provider>
    );
}


export default App;