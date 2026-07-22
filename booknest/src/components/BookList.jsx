import BookCard from './BookCard';

function BookList({ cart, searchTerm, onSearchChange, onAddToCart, onRemoveFromCart }) {
  const books = [
    { id: 1, title: 'Clean Code', author: 'Robert C. Martin', year: 2008, genre: 'Programming', rating: 4, pages: 464, isNew: true, isBestseller: true, cover: 'https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg' },
    { id: 2, title: 'Python Crash Course', author: 'Eric Matthes', year: 2019, genre: 'Programming', rating: 5, pages: 544, isNew: false, isBestseller: true, cover: 'https://covers.openlibrary.org/b/isbn/9781593276034-L.jpg' },
    { id: 3, title: 'JavaScript: Good Parts', author: 'Douglas Crockford', year: 2008, genre: 'Programming', rating: 4, pages: 176, isNew: false, isBestseller: false, cover: 'https://covers.openlibrary.org/b/isbn/9780596517748-L.jpg' },
    { id: 4, title: 'React Up & Running', author: 'Stoyan Stefanov', year: 2021, genre: 'Technology', rating: 4, pages: 222, isNew: true, isBestseller: false, cover: 'https://covers.openlibrary.org/b/isbn/9781492051466-L.jpg' },
    { id: 5, title: 'The Pragmatic Programmer', author: 'David Thomas', year: 2019, genre: 'Programming', rating: 5, pages: 352, isNew: false, isBestseller: true, cover: 'https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg' },
    { id: 6, title: 'Design Patterns', author: 'Gang of Four', year: 1994, genre: 'Computer Science', rating: 4, pages: 416, isNew: false, isBestseller: false, cover: 'https://covers.openlibrary.org/b/isbn/9780201633610-L.jpg' },
    { id: 7, title: 'Design of Everyday Things', author: 'Don Norman', year: 1988, genre: 'Technology', rating: 4, pages: 368, isNew: true, isBestseller: false, cover: 'https://covers.openlibrary.org/b/isbn/9780465050659-L.jpg' },
    { id: 8, title: 'Learning React', author: 'Alex Banks', year: 2020, genre: 'Technology', rating: 4, pages: 310, isNew: true, isBestseller: true, cover: 'https://covers.openlibrary.org/b/isbn/9781492051725-L.jpg' },
  ];

  //Filter books based on search term
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <div className='bg-yellow-50 border border-y-amber-200 rounded-xl p-8 text-center mb-6'>
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