function BookCard({ book, isInCart, onAdd, onRemove }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative">
        <img src={book.cover} alt={book.title} className="w-full h-56 object-cover" />
        {book.isNew && (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-lg">NEW</span>
        )}
        {book.isBestseller && (
          <span className="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-lg">🔥 BESTSELLER</span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-bold text-gray-800 text-lg mb-2">{book.title}</h3>
        <p className="text-gray-500 text-sm mb-3">by {book.author}</p>
        <div className="flex items-center gap-1 mb-2">
          <span className="text-yellow-500 text-sm">{'★'.repeat(book.rating)}{'☆'.repeat(5 - book.rating)}</span>
          <span className="text-gray-400 text-xs">{book.rating}/5</span>
        </div>
        <div className="flex items-center gap-1 mb-3 text-gray-500 text-sm">
          <span>📄</span><span>{book.pages} pages</span>
        </div>
        <div className="flex gap-2">
          <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">{book.year}</span>
          <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">{book.genre}</span>
        </div>

        {/* DECISION: Which button to show? */}
        {isInCart ? (
            // TRUE: Book IS in cart → show REMOVE
            <button
                onClick={() => onRemove(book.id)}
                className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 font-medium"
            >
                Remove from Cart
            </button>
        ) : (
            // FALSE: Book is NOT in cart → show ADD
            <button
                onClick={() => onAdd(book)}
                className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 font-medium"
            >
                + Add to Cart
            </button>
        )}
      </div>
    </div>
  );
}

export default BookCard;