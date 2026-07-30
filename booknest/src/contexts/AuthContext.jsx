// AuthContext: A context that stores user data.

import { createContext, useState, useContext } from "react";

// Step 1: Step 1: Create an empty storage box for auth data
const AuthContext = createContext();

// Step 2: Provider component — holds user state
function AuthProvider({ children }) {
    // user = currently logged in user (null = not logged in)
    const [user, setUser] = useState(null);   

    // login function — sets the user
    const login = (username) => {
        setUser({ username });      // Save user object with username
    };

    // logout function — clears the user
    const logout = () => {
        setUser(null);     // Set back to null
    };

    return (
        // Share user, login, logout with all children
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook — shortcut so components can read auth context
function useAuth() {
    return useContext(AuthContext);
}

export { AuthProvider, useAuth };