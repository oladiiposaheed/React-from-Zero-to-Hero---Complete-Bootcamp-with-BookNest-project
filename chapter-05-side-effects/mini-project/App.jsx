import { useState, useEffect } from 'react';
import Header from './components/Header';
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';

function App() {

  // ===== 1. ALL STATE =====

  // Cart state
  const [cart, setCart] = useState([]);

  // Books state
  const [books, setBooks] = useState([]);

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    year: '',
    genre: '',
    rating: '',
    pages: '',
  });

  // Track next ID State
  const [nextId, setNextId] = useState(9);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error state — null = no error
  const [error, setError] = useState(null);

  // 2. Search state
  const [searchTerm, setSearchTerm] = useState('');

  // ALL FUNCTIONS =====

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add to cart
  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCart(cart.filter(book => book.id !== id));
  };

  // Add new book
  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: nextId,
      title: formData.title,
      author: formData.author,
      year: parseInt(formData.year) || 2025,
      genre: formData.genre || 'General',
      rating: parseInt(formData.rating) || 4,
      pages: parseInt(formData.pages) || 300,
      isNew: true,
      isBestseller: false,
      cover: 'https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg',
    };

    setBooks([...books, newBook]);
    setNextId(nextId + 1);
    setFormData({ title: '', author: '', year: '', genre: '', rating: '', pages: '' });
  };

  // 3. useEffect to fetch books from API 
  useEffect(() => {
    const fetchBooks = async () => {

      try {
        setLoading(true);
        setError(null);     // Clear old errors

        const response = await fetch('https://openlibrary.org/search.json?q=programming&limit=8');
        
        if (!response.ok) {   // Check if response is good
          throw new Error('Failed to fetch books');
        }

        const data = await response.json();

        const formattedBooks = data.docs.slice(0, 8).map((book, index) => ({
          id: index + 1,
          title: book.title || 'Unknown Title',
          author: book.author_name?.[0] || 'Unknown Author',
          year: book.first_publush_year || 2024,
          gnenre: book.subject?.[0] || 'General',
          rating: Math.floor(Math.random() * 3) + 3,
          pages: Math.floor(Math.random() * 500) + 100,
          isNew: index < 2,
          isBestseller: index < 1,
          cover: book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
            : `https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg`,
          }));

          setBooks(formattedBooks);
        } catch (err) {
          setError('Failed to load books. Please try again.');  // Set error
        } finally {
          setLoading(false);     // Always stop loading
        }
    };

    fetchBooks();
  }, []);

  // ===== 4. RETURN =====

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <Header cartCount={cart.length} />

        {/* Form imported as component */}
        <AddBookForm 
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />

        <BookList 
          books={books}
          loading={loading}
          error={error}
          cart={cart} 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onAddToCart={addToCart} 
          onRemoveFromCart={removeFromCart}   
        />
      </div>
    </div>
  );
}

export default App;