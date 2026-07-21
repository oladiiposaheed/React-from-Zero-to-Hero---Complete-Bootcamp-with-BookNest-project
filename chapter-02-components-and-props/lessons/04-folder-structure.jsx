// ==========================================
// LESSON 4: Folder Structure
// ==========================================
// Professional React projects use a components/ folder.
//
// FINAL STRUCTURE:
//
// booknest/src/
// ├── App.jsx                  ← Clean — only imports + layout
// ├── main.jsx                 ← Entry point (don't touch)
// └── components/
//     ├── Header.jsx           ← One component per file
//     ├── BookCard.jsx         ← Name matches component
//     └── BookList.jsx         ← Exports default
//
// App.jsx becomes:
//   import Header from './components/Header';
//   import BookList from './components/BookList';
//
//   function App() {
//     return (
//       <div>
//         <Header />
//         <BookList />
//       </div>
//     );
//   }
// ==========================================