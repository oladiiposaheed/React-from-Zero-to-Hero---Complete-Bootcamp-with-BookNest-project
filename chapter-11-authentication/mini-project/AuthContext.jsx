// AuthContext: A context that stores user data.

import { createContext, useState, useContext } from "react";

// Step 1: Create context
const AuthContext = createContext();

// Step 2: Provider
function AuthProvider({ children }) {
    const [user, setUser] = useState(null);   // null = not logged in

    // Login function
    const login = (username) => {
        setUser({ username });
    };

    // Logout function
    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook for easy access
function useAuth() {
    return useContext(AuthContext);
}

export { AuthProvider, useAuth };