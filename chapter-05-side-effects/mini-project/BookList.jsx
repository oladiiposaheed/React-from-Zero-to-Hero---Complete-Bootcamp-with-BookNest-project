import BookCard from './BookCard';

function BookList({ books, loading, error, cart, searchTerm, onSearchChange, onAddToCart, onRemoveFromCart }) {

  //Filter books based on search term
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Show spinner while loading
  if (loading) {
    return (
      <div className='text-center py-20'>
        <p className='text-2xl text-gray-500'>⏳ Loading books...</p>
      </div>
    );
  }

  // Show error message if API failed
  if (error) {
    return (
      <div className="text-center py-20">
        <p className='text-2xl text-red-500'>❌ {error}</p>
        <button
          onClick={() => window.location.reload()}
          className='mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700'
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">📖 Featured Books</h2>
        {/* Search input */}
        <input 
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder='Search books by title...'
          className='w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-lg mb-6 focus:outline-none'
        />

        {/* Show message if no books match */}
        {searchTerm && filteredBooks.length === 0 && (
          <div className='bg-yellow-50 border border-y-amber-200 rounded-xl p-8 text-center'>
            <p className='text-yellow-700 text-lg'>
              📭 No books found for '{searchTerm}'
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Replace books with filteredBooks */}
            {filteredBooks.map(book => {
            // Check if this book is in the cart
                const isInCart = cart.some(item => item.id === book.id);

                return (
                    <BookCard 
                        key={book.id}
                        book={book}
                        isInCart={isInCart}
                        onAdd={onAddToCart}
                        onRemove={onRemoveFromCart}
                    />
                );
                })}
        </div>
    </section>
  )
}

export default BookList;