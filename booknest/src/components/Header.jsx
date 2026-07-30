import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";


function Header() {

  const { user, logout } = useAuth();
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

        {/* User info + logout */}
        <div className="bg-white/20 rounded-2xl px-4 py-3 text-center mr-4">
          {user ? (
            <div className="flex items-center gap-3">
              <img 
                src={`https://ui-avatars.com/api/?name=${user.username}&background=random&size=32`}
                alt={user.username}
                className="w-8 h-8 rounded-full" 
              />
              <span className="text-sm font-semibold">
                {user.username}
              </span>
              <button
                onClick={logout}
                className="text-xs text-red-200 hover:text-white# transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="text-sm font-semibold hover:text-purple-200 transition-colors">
              Login
            </Link>
          )}
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