import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import BookDetails from './pages/BookDetails';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

function App() {
    // ===== STATE =====
    const [cart, setCart] = useState([]);
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    // ===== CART FUNCTIONS =====
    const addToCart = (book) => {
        setCart([...cart, book]);    // Copy old cart + new book
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(book => book.id !== id));  // Keep books that don't match ID
    };

    // ===== FETCH BOOKS FROM API =====
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                setLoading(true);      // Start spinner
                setError(null);     // Clear old errors

                const response = await fetch(
                    'https://openlibrary.org/search.json?q=programming&limit=15'
                );

                if (!response.ok)     // If bad response
                    throw new Error('Failed')  

                const data = await response.json();

                // Format API data into our book structure
                const formattedBooks = data.docs.slice(0, 15).map((book, index) => ({
                    id: index + 1,
                    title: book.title || 'Unknown Title',
                    author: book.author_name?.[0] || 'Unknown Author',
                    year: book.first_publish_year || 2022,
                    genre: book.subject?.[0] || 'General',
                    rating: Math.floor(Math.random() * 3) + 3,
                    pages: Math.floor(Math.random() * 500) + 100,
                    isNew: index < 1,
                    cover: book.cover_i
                        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                        :  'https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg',
                }));
                // console.log(response.status);   // 200
                // console.log(response.ok);       // true
                setBooks(formattedBooks);    // Save to state
            } catch (err) {
                setError('Failed to load books.');     // Show error
            } finally {
                setLoading(false);  // Stop spinner
            }
        };

        fetchBooks();
    }, []);  // Empty [] = run once on first load

    return (
        <BrowserRouter>
            <Routes>
                {/* Layout wraps all pages */}
                <Route path='/' element={<Layout cartCount={cart.length}/>}>
                    <Route index element={
                        // Pass books, loading, and error from App to Home component.
                        <Home 
                            books={books}  // Pass books array
                            loading={loading}   // Pass loading state
                            error={error}   // Pass error message
                            cart={cart}
                            searchTerm={searchTerm}
                            onSearchChange={setSearchTerm}
                            onAddToCart={addToCart}
                            onRemoveFromCart={removeFromCart}
                        />
                    } />
                    <Route path='book/:id' element={
                        <BookDetails books={books} />
                    } />

                    {/* Add BookDetails Route */}
                    </Route>

                    {/* Add Cart and NotFound Routes */}
                    <Route path='cart' element={
                        <Cart cart={cart} onRemoveFromCart={removeFromCart} />} />
                    <Route path='*' element={<NotFound />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;