import { createContext, useReducer } from "react";

// Step 1: Create the context (empty storage box)
const CartContext = createContext();

// ===== STEP 2: Reducer — handles all cart logic =====
function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return [...state, action.book];
        
            case 'REMOVE':
                return state.filter(item =>item.id !== action.id);
            
            case 'CLEAR':
                return [];
            
            default:
                return state;
    }
}

// ===== STEP 3: Provider — shares cart + dispatch =====
function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, []);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider };



