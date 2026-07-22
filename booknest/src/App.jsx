import Header from './components/Header';
import BookList from './components/BookList';
import { useState } from 'react';

function App() {

  // Cart state — starts as empty array
  const [cart, setCart] = useState([]);

  // Books state
  const [books, setBooks] = useState([
    { id: 1, title: 'Clean Code', author: 'Robert C. Martin', year: 2008, genre: 'Programming', rating: 4, pages: 464, isNew: true, isBestseller: true, cover: 'https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg' },
    { id: 2, title: 'Python Crash Course', author: 'Eric Matthes', year: 2019, genre: 'Programming', rating: 5, pages: 544, isNew: false, isBestseller: true, cover: 'https://covers.openlibrary.org/b/isbn/9781593276034-L.jpg' },
    { id: 3, title: 'JavaScript: Good Parts', author: 'Douglas Crockford', year: 2008, genre: 'Programming', rating: 4, pages: 176, isNew: false, isBestseller: false, cover: 'https://covers.openlibrary.org/b/isbn/9780596517748-L.jpg' },
    { id: 4, title: 'React Up & Running', author: 'Stoyan Stefanov', year: 2021, genre: 'Technology', rating: 4, pages: 222, isNew: true, isBestseller: false, cover: 'https://covers.openlibrary.org/b/isbn/9781492051466-L.jpg' },
    { id: 5, title: 'The Pragmatic Programmer', author: 'David Thomas', year: 2019, genre: 'Programming', rating: 5, pages: 352, isNew: false, isBestseller: true, cover: 'https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg' },
    { id: 6, title: 'Design Patterns', author: 'Gang of Four', year: 1994, genre: 'Computer Science', rating: 4, pages: 416, isNew: false, isBestseller: false, cover: 'https://covers.openlibrary.org/b/isbn/9780201633610-L.jpg' },
    { id: 7, title: 'Design of Everyday Things', author: 'Don Norman', year: 1988, genre: 'Technology', rating: 4, pages: 368, isNew: true, isBestseller: false, cover: 'https://covers.openlibrary.org/b/isbn/9780465050659-L.jpg' },
    { id: 8, title: 'Learning React', author: 'Alex Banks', year: 2020, genre: 'Technology', rating: 4, pages: 310, isNew: true, isBestseller: true, cover: 'https://covers.openlibrary.org/b/isbn/9781492051725-L.jpg' },
  ]);

  // Form state for adding new books
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    year: '',
    genre: '',
    rating: '',
    pages: '',
  });

  // Track next available ID
  const [nextId, setNextId] = useState(9);  // next ID is 9

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Search state — what user types in search box
  const [searchTerm, setSearchTerm] = useState('');

  //Add book to cart
  const addToCart = (book) => {
    setCart([...cart, book]);     // Copy old cart + add new book
  };

  // Remove book from cart by ID
  const removeFromCart = (id) => {
    setCart(cart.filter(book => book.id !== id));     // Keep only books that don't match
  };

  // Handle form submission — add new book
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <Header cartCount={cart.length} />

        {/* Add Book Form */}
        <div className='bg-white rounded-xl shadow-md p-6 mb-8'>
          <h2 className='text-xl font-bold text-gray-800 mb-4'>➕ Add a New Book</h2>

          <form onSubmit={handleSubmit} className='space-y-4'>
            {/* Title field */}
            <label className='block text-gray-700 font-semibold mb-1'>Title</label>
            <input 
              type="text" 
              name='title'
              value={formData.title}
              onChange={handleChange}
              placeholder='Book title'
              className='w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-purple-500 focus:outline-none'
              required
            />

            {/* Author field */}
            <label className='block text-gray-700 font-semibold mb-1'>Author</label>
            <input 
              type="text" 
              name='author'
              value={formData.author}
              onChange={handleChange}
              placeholder='Author name'  
              className='w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-purple-500 focus:outline-none'
              required
            />

            {/* Year and Genre side by side */}
            <div className='flex gap-4'>
              <div className='flex-1'>
                <label className='block text-gray-700 font-semibold mb-1'>Year</label>
                <input 
                  type="number" 
                  name='year'
                  value={formData.year}
                  onChange={handleChange}
                  placeholder='2025'
                  className='w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-purple-500 focus:outline-none'
                />
              </div>
              <div className='flex-1'>
                <label className='block text-gray-700 font-semibold mb-1'>Genre</label>
                <input 
                  type="text" 
                  name='genre'
                  value={formData.genre}
                  onChange={handleChange}
                  placeholder='Programming'
                  className='w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-purple-500 focus:outline-none'
                />
              </div>
            </div>

            {/* Rating and Pages side by side */}
            <div className='flex gap-4'>
              <div className='flex-1'>
                <label className='block text-gray-700 font-semibold mb-1'>Rating (1-5)</label>
                <input 
                  type="number" 
                  name='rating'
                  value={formData.rating}
                  onChange={handleChange}
                  placeholder='4'
                  min='1'
                  max='5'
                  className='w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-purple-500 focus:outline-none'
                />
              </div>
              <div className='flex-1'>
                <label className='block text-gray-700 font-semibold mb-1'>Pages</label>
                <input 
                  type="number" 
                  name='pages'
                  value={formData.pages}
                  onChange={handleChange}
                  placeholder='870'
                  className='w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-purple-500 focus:outline-none'
                />
              </div>
            </div>

            {/* Submit button */}
            <button
              type='submit'
              className='w-full bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 transition-colors'
            >
              + Add Book
            </button>

          </form>
        </div>

        {/* Pass Search Props to BookList */}
        <BookList 
          books={books}
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