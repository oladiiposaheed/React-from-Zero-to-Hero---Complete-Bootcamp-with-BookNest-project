import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Login() {
  // Get login function from auth context
  const { login } = useAuth();

  // State to store what user types in the input
  const [username, setUsername] = useState('');

  // navigate = function to redirect user to another page
  const navigate = useNavigate();

  // Runs when user clicks "Login" button
  const handleSubmit = (e) => {
    e.preventDefault();              // Stop page from refreshing
    if (username.trim()) {           // Check if input is not empty/spaces
      login(username);               // Save user to AuthContext
      navigate('/');                 // Redirect to home page
    }
  };

  return (
    // Full screen with gradient background, centers content
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
      
      {/* White card */}
      <div className="bg-white rounded-2xl shadow-xl p-10 text-center max-w-md">
        
        {/* Avatar image — shows "G" for Guest */}
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-purple-300 mb-6">
          <img 
            src="https://ui-avatars.com/api/?name=Guest&background=gray&size=96"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome</h1>
        <p className="text-gray-500 mb-6">Enter your username to continue</p>
        
        {/* Login form — submits on Enter or button click */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}                        // Controlled by state
            onChange={(e) => setUsername(e.target.value)}  // Update state on type
            placeholder="Your username"
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 mb-4 focus:border-purple-500 focus:outline-none text-center"
          />
          <button
            type="submit"                           // Triggers form onSubmit
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl hover:opacity-90 transition-opacity font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;