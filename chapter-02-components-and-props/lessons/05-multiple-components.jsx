// ==========================================
// LESSON 5: Multiple Components Together
// ==========================================
// Components can import OTHER components.
// This creates a tree structure.
//
// OUR APP STRUCTURE:
//
//   App.jsx
//   ├── imports Header
//   │   └── Header.jsx (no imports)
//   │
//   └── imports BookList
//       └── BookList.jsx
//           └── imports BookCard
//               └── BookCard.jsx (no imports)
//
// KEY RULES:
//   1. Import at the TOP of the file
//   2. Export at the BOTTOM of the file
//   3. One component per file
//   4. One default export per file
//   5. File name = Component name (Header → Header.jsx)
//
// This is how ALL professional React projects are organized.
// ==========================================