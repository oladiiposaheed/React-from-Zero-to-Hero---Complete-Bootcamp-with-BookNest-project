import { createContext, useContext, useState } from "react";

// Step 1: Create the context (empty storage box)
const CartContext = createContext();

// Step 2: Create the Provider component
// This wraps the app and shares cart data
function CartProvider({ children }) {
    // Cart state — starts empty
    const [cart, setCart] = useState([]);

    // Add item to cart
    const addToCart = (book) => {
        setCart([...cart, book]);
    };

    // Remove item by ID
    const removeFromCart = (id) => {
        setCart(cart.filter(book => book.id !== id));
    };

    return (
        // Share cart + BOTH functions
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

// Export BOTH so other files can use them
export { CartContext, CartProvider };