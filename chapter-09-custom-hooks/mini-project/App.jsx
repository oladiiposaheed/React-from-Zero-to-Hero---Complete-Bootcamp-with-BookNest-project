import { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import BookDetails from './pages/BookDetails';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import { CartProvider } from './contexts/CartContext';
import useDebounce from './hooks/useDebounce';
import { CartContext } from './contexts/CartContext';

function App() {
    // ===== STATE =====
    //const [cart, setCart] = useState([]);
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    //const { cart } = useContext(CartContext);

    // Debounce the search — only update after user stops typing
    const debouncedSearch = useDebounce(searchTerm, 300);

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
    }, []);  // re-run
    return (
        <CartProvider>
            <BrowserRouter>
                <Routes>
                    {/* Layout wraps all pages */}
                    <Route path='/' element={<Layout />}>
                        <Route index element={
                            // Pass books, loading, and error from App to Home component.
                            <Home 
                                books={books}  // Pass books array
                                loading={loading}   // Pass loading state
                                error={error}   // Pass error message
                                //searchTerm={searchTerm}
                                onSearchChange={setSearchTerm}  // Input updates instantly
                                searchTerm={debouncedSearch}    // Filter uses delayed value
                            />
                        } />
                        {/* Add BookDetails Route */}
                        <Route path='book/:id' element={
                            <BookDetails books={books} />
                        } />
                        {/* Add Cart and NotFound Routes */}
                        <Route path='cart' element={<Cart />} />
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;