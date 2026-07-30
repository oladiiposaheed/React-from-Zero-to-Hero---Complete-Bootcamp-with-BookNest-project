import { useState } from "react";
import { AuthProvider, useAuth } from "./contexts/AuthContext";


// Component that reads auth data
function LoginPage() {
    // Get user and functions from auth context
    const { user, login, logout } = useAuth();
    const [username, setUsername] = useState('');  // What user types

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim()) {
            login(username);     // Only login if not empty
            setUsername('')    // Clear input
        }
    };    

    return (
        // Full screen with gradient background, centers content
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">

            {/* White card with shadow and rounded corners */}
            <div className="bg-white rounded-xl shadow-xl p-10 text-center max-w-md">
                {/* Circle avatar — shows first letter of username or "?" */}
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-purple-300 mb-6">
                    <img 
                        src={user
                            ? `https://ui-avatars.com/api/?name=${user.username}&background=random&size=96`
                            : 'https://ui-avatars.com/api/?name=Guest&background=gray&size=96'
                        }
                        alt="Avatar" 
                        className="w-full h-full object-cover"
                    
                    />
                </div>

                {user ? (
                    // ===== LOGGED IN =====
                    <>
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back!</h1>
                        <p>@{user.username}</p>

                        <button 
                            onClick={logout}
                            className="bg-red-500 text-white px-8 py-3 rounded-xl hover:bg-red-600 transition-colors font-semibold"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    // ===== LOGGIN FORM =====
                    <>
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome</h1>
                        <p className="text-gray-500 mb-6">Enter your username to continue</p>

                        {/* Login form */}
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Your username"
                                className="w-full border-2 border-gray-300 rounded-lg px-4 py-3
                                           mb-4 focus:border-purple-500 focus:outline-none text-center"
                            />
                            <button 
                                type="submit"
                                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 
                                rounded-xl hover:opacity-90 transition-opacity font-semibold"
                            >
                            Login
                        </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

function App() {
    return (
        <AuthProvider>
            <LoginPage />
        </AuthProvider>
    );
}

export default App;