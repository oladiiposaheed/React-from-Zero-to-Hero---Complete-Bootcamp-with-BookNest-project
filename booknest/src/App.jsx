import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import BookDetails from './pages/BookDetails';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Login from './pages/Login';                       // Login page
import ProtectedRoute from './components/ProtectedRoute'; // Blocks pages if not logged in
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';   // Auth state for whole app
import useDebounce from './hooks/useDebounce';

function App() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 300);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch('https://openlibrary.org/search.json?q=programming&limit=15');
                if (!response.ok) throw new Error('Failed');
                const data = await response.json();
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
                        : 'https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg',
                }));
                setBooks(formattedBooks);
            } catch (err) {
                setError('Failed to load books.');
            } finally {
                setLoading(false);
            }
        };
        fetchBooks();
    }, []);

    return (
        // AuthProvider wraps everything — makes auth available globally
        <AuthProvider>
            {/* CartProvider — cart state available globally */}
            <CartProvider>
                <BrowserRouter>
                    <Routes>
                        {/* Layout wraps all pages with Header + Nav */}
                        <Route path='/' element={<Layout />}>
                            {/* Home — public */}
                            <Route index element={<Home books={books} loading={loading} error={error} searchTerm={debouncedSearch} onSearchChange={setSearchTerm} />} />
                            
                            {/* Book Details — public */}
                            <Route path='book/:id' element={<BookDetails books={books} />} />
                            
                            {/* Login page — public */}
                            <Route path='login' element={<Login />} />
                           
                            {/* Cart — PROTECTED: only logged in users */}
                            <Route path='cart' element= {
                                <ProtectedRoute>
                                    <Cart />
                                </ProtectedRoute>
                            }/>
                            
                            {/* 404 — public */}
                            <Route path='*' element={<NotFound />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </AuthProvider>
    );
}

export default App;