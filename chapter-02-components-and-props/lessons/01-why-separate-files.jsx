// ==========================================
// LESSON 1: Why Separate Files?
// ==========================================
//
// PROBLEM (Chapter 01):
//   All components in ONE file (App.jsx)
//   - Hard to find specific code
//   - Can't reuse across projects
//   - Gets messy with many components
//
// SOLUTION (Chapter 02):
//   Each component in its OWN file
//   - Easy to find
//   - Easy to reuse
//   - Professional standard
//
// BEFORE:
//   App.jsx (Header + BookCard + BookList)
//
// AFTER:
//   App.jsx (imports only)
//   components/Header.jsx
//   components/BookCard.jsx
//   components/BookList.jsx
// ==========================================