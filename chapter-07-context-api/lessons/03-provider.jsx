import { useState, createContext, useContext } from "react";


// ===== STEP 1: Create the storage box =====
const CartContext = createContext();

// ===== Header — reads cart from context =====
function Header() {
    // Get cart from context — no props needed!
    const { cart } = useContext(CartContext);

    return (
        <div style={{ background:'#333', color: 'white', padding:'10px' }}>
            🛒 Cart: {cart.length} items
        </div>
    );
}

// ===== Product — can add to cart =====
function Product({ name }) {
    // Get addToCart function from context
    const { addToCart } = useContext(CartContext);

    return (
        <div style={{ padding: '10px', border: '1px solid #ccc', margin: '5px' }}>
            <p>{name}</p>
            <button onClick={() => addToCart({ id: Date.now(), name })}>
                Add to Cart
            </button>
        </div>
    );
}

// ===== CartItem — shows one item with remove button =====
function CartItem({ item }) {
    // Get removeFromCart function from context
    const { removeFromCart } = useContext(CartContext);

    return (
        <div style={{ padding: '10px', border: '1px solid #ccc', margin: '5px' }}>
            <span>{item.name}</span>
            <button 
                onClick={() => removeFromCart(item.id)}
                style={{ marginLeft: '10px', color: 'red' }}
            >
                Remove
            </button>
        </div>
    )
}

function App() {
    // ===== Cart state — lives in App =====
    const [cart, setCart] = useState([]);

    // ===== Cart functions =====
    const addToCart = (item) => {
        setCart([...cart, item]);    // Add item to cart
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));  // Remove item by ID
    };




    return (
        // ===== STEP 2: Provider wraps everything =====
        // It makes CartContext available to all children

        // ===== Provider shares cart + functions =====
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            <Header />

            <h2>Products</h2>
            <Product name='Clean Code' />
            <Product name='React Up & Running' />
            <Product name='Python Crash Course' />

            <h2>Cart Items</h2>
            {cart.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                cart.map(item => (
                    <CartItem key={item.id} item={item} />
                ))
            )}
        </CartContext.Provider>
    );
}

export default App;
