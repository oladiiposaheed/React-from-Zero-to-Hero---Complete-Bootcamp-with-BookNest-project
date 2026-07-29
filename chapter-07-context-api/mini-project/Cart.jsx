import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function Cart() {

    // Read cart and removeFromCart from context
    const { cart, onRemoveFromCart } = useContext(CartContext);

    // Calculate total (pretend each book costs $29.99)
    const total = cart.length * 29.99;

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">🛒 Your Cart</h1>
        
            {/* If cart is empty */}
            {cart.length === 0 ? (
                <div className="text-center py-20">
                    <p className="text-xl text-gray-500 mb-4">Your cart is empty</p>
                    <Link to='/' className="text-purple-600 font-semibold">← Browse Books</Link>
                </div>
                        ) : (
                <>
                    <div className="space-y-4 mb-6">
                        {cart.map(book => (
                            <div key={book.id} className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4">
                                <img src={book.cover} alt={book.title} className="w-16 h-20 object-cover rounded" />
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-800">{book.title}</h3>
                                    <p className="text-gray-500 text-sm">by {book.author}</p>
                                </div>
                                <p className="font-bold text-purple-600">$29.99</p>
                                <button 
                                    onClick={() => onRemoveFromCart(book.id)}
                                    className="bg-red-100 text-red-600 px-3 py-1 rounded-lg hover:bg-red-200 text-sm"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Total */}
                    <div className="bg-white rounded-xl shadow-md p-6 flex justify-between items-center">
                        <p className="text-xl font-bold text-gray-800">Total: ${total.toFixed(2)}</p>
                        <p className="text-gray-500">{cart.length} {cart.length === 1 ? 'book' : 'books'}</p>
                    </div>

                    <Link to='/' className="text-purple-600 hover:text-purple-700 text-sm mb-6 inline-block">
                        ← Back to Home
                    </Link>
                </>
            )}
        </div>
    );
}

export default Cart;