import { createContext, useReducer, useEffect } from "react";


// Step 1: Create the context (empty storage box)
const CartContext = createContext();

// ===== STEP 2: Reducer — handles all cart logic =====
function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return [...state, { ...action.book, quantity: 1 }];
        
            case 'REMOVE':
                return state.filter(item =>item.id !== action.id);
            
            case 'UPDATE_QTY':
                return state.map(item =>
                    item.id === action.id
                        ? { ...item, quantity: action.quantity }  // Update quantity
                        : item           // Keep unchanged
                );
            
            case 'CLEAR':
                return [];
            
            default:
                return state;
    }
}

// ===== STEP 3: Provider — shares cart + dispatch =====
function CartProvider({ children }) {
    // Get saved cart from localStorage (or empty array if nothing saved)
    const [cart, dispatch] = useReducer(cartReducer, [], () => {
        const saved = localStorage.getItem('booknest-cart');
        return saved ? JSON.parse(saved) : [];
        
    });
    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('booknest-cart', JSON.stringify(cart));
    }, [cart]);

    // Update tab title
    useEffect(() => {
       // console.log('Setting title, cart length:', cart.length);
        document.title = cart.length > 0
            ? `🛒 ${cart.length} | BooNest`
            : '📚 BookNest';
    }, [cart]);
    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider };



