import { useState, useEffect } from "react";

function App() {
  const [books, setBooks] = useState([]);    // Start with empty array

  // Loading state — true = still loading, false = done
  const [loading, setLoading] = useState(true);

  // Fetch data from API when component first loads
  useEffect(() => {
    const fetchBooks = async () => {

      setLoading(true);   // Start loading

      // Step 1: Fetch from Open Library API
      const response = await fetch('https://openlibrary.org/search.json?q=programming&limit=8');
      
      // Step 2: Convert to JSON
      const data = await response.json();

      // Step 3: Transform the data into our format
      const formattedBooks = data.docs.slice(0, 8).map((book, index) => ({
        id: index + 1,
        title: book.title || 'Unknown Title',
        author: book.author_name?.[0] || 'Unknown Author',
        year: book.first_publish_year || 2024,
        genre: book.subject?.[0] || 'General',
        rating: Math.floor(Math.random() * 3) + 3,   // Random 3-5
        pages: Math.floor(Math.random() * 500) + 100,   // Random 100-600
        isNew: index < 2,
        isBestseller: index < 1,
        cover: book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
          : `https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg`,
      }));

      // Step 4: Save to state
      setBooks(formattedBooks);

      setLoading(false)     // Done loading
    };
    fetchBooks();
  }, []);       // ← Empty array = run ONCE on first load

  return (
    <div>
      <h1>Loading State Demo</h1>

      {/* Show spinner while loading */}
      {loading ? (
        <p>⏳ Loading books... Please wait.</p>
      ) : (
        <div>
          <p>Total: {books.length} books loaded ✅</p>
          <ul>
            {books.map(book => (
              <li key={book.id}>
                <strong>{book.title}</strong> by {book.author}
              </li>
            ))}
          

          </ul>
        </div>
      )}
    </div>
  );  
}

export default App;