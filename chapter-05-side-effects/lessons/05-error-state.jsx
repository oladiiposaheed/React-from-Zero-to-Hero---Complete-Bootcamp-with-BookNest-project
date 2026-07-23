import { useState, useEffect } from "react";


function App() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    // Error state — null = no error, string = error message
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchBooks = async () => {
        try {
            setLoading(true);    // Start loading
            setError(null);     // Clear old errors

            // Fetch from Open Library API
            const response = await fetch('https://openlibrary.org/search.json?q=programming&limit=8');

            if (!response.ok) {        // Check if response is good
                throw new Error('Failed to fetch');
            }

            const data = await response.json();

            // Transform the data into our format
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

            // Save to state
            setBooks(formattedBooks);
        }  catch (err) {
            // Handle errors
            setError('Failed to load books. Please try again.');
            console.log('Error', err.message);
        } finally {
            // Always stop loading
            setLoading(false);
        }
      };

        fetchBooks();
    }, []);    // ← Empty array = run ONCE on first load

    return (
        <div>
            <h1>Error State Demo</h1>

            {/* Show different UI based on state */}
            {loading ? (
                <p>⏳ Loading books...</p>
            ) : error ? (
                <div>
                    <p>❌ {error}</p>
                    <button onClick={() => window.location.reload()}>Try Again</button>
                </div>
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