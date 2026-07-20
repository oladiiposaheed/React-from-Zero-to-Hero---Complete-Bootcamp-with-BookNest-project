function App() {
  const isLoggedIn = true;   // Try changing to false
  const cartCount = 3;       // Try changing to 0
  const hasDiscount = true; // Try changing to false

  return (
    <div className="min-h-screen bg-gray-300 p-8">
      <div className="max-w-md mx-auto">
        
        {/* Example 1: && operator — show badge only if logged in */}
        {isLoggedIn && (
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg mb-4">
            ✅ You are logged in
          </div>
        )}

        {/* Example 2: Ternary operator — show login OR logout */}
        {isLoggedIn ? (
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg mb-4">
            Logout
          </button>
        ) : (
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4">
            Login
          </button>
        )}

        {/* Example 3: && show ONLY if true, nothing if false */}
        {hasDiscount && (
          <div className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg mb-4">
            🔥 Sale! 20% off
          </div>
        )}

        {/* Example 4: Cart message based on count */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Shopping Cart</h1>
        {cartCount > 0 ? (
          <p className="text-gray-700">You have {cartCount} items.</p>
        ) : (
          <p className="text-gray-400 italic">Your cart is empty</p>
        )}
      </div>
    </div>
  );
}

export default App;