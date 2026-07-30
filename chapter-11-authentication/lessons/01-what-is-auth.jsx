// ==========================================
// LESSON 1: What is Authentication?
// ==========================================
//
// Authentication = proving who you are (login/logout)
// Authorization = what you're allowed to do (protected pages)
//
// FLOW:
//   1. User enters credentials
//   2. System verifies them
//   3. On success → access protected pages
//   4. On logout → session ends
//
// IN BOOKNEST:
//   AuthContext = stores user globally
//   Login page = username/password form
//   ProtectedRoute = blocks cart page if not logged in
// ==========================================