// ==========================================
// LESSON 5: Mock Authentication Flow
// ==========================================
//
// COMPLETE FLOW:
//
// 1. AuthProvider wraps the app
//    - Stores user state (null or { username })
//
// 2. Login page (/login)
//    - Form to enter username
//    - Calls login(username) from AuthContext
//
// 3. ProtectedRoute component
//    - Checks if user exists
//    - If not → redirect to /login
//    - If yes → show the protected page
//
// 4. Cart page (/cart) — protected
//    - Wrapped in <ProtectedRoute>
//
// 5. Logout button
//    - Calls logout() from AuthContext
//    - Clears user → redirects to login
//
// FILES NEEDED:
//   - contexts/AuthContext.jsx
//   - components/ProtectedRoute.jsx
//   - pages/Login.jsx
//   - App.jsx (updated routes)
// ==========================================