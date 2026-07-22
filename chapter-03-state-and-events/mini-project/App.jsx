import Header from './components/Header';
import BookList from './components/BookList';
import { useState } from 'react';

function App() {

  // Cart state — starts as empty array
  const [cart, setCart] = useState([]);

  //Add book to cart
  const addToCart = (book) => {
    setCart([...cart, book]);     // Copy old cart + add new book
  };

  // Remove book from cart by ID
  const removeFromCart = (id) => {
    setCart(cart.filter(book => book.id !== id));     // Keep only books that don't match
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <Header cartCount={cart.length} />
        <BookList cart={cart} onAddToCart={addToCart} onRemoveFromCart={removeFromCart} />
      </div>
    </div>
  );
}

export default App;