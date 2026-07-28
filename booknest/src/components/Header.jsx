import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";


function Header() {
  const { cart } = useContext(CartContext)  // Read cart from context
  return (
    <header className="bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500 text-white p-10 rounded-2xl shadow-2xl mb-10">
      
      {/* justify-between: logo left, cart right */}
      <div className="flex items-center justify-between">
        
        {/* LEFT: Logo and title — unchanged */}
        <div className="flex items-center gap-5">
          <div className="bg-white/20 p-4 rounded-2xl">
            <span className="text-6xl">📚</span>
          </div>

          <div>
            <h1 className="text-5xl font-extrabold tracking-tight">BookNest</h1>
            <p className="text-indigo-100 mt-2 text-lg font-light">
              Discover, Track & Enjoy Your Favorite Books
            </p>
          </div>
        </div>

        {/* RIGHT: Cart counter */}
        <div className="bg-white/20 rounded-2xl px-6 py-4 text-center">
          <p className="text-4xl font-bold">{cart.length}</p>
          <p className="text-sm text-indigo-100 mt-1">🛒 Cart</p>
        </div>
      </div>
    </header>
  );
}

export default Header;