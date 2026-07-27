import { Link, useParams } from "react-router-dom";

function BookDetails({ books }) {

    // Get the :id from URL
    const { id } = useParams();

    // Find the book with matching ID
    const book = books.find(b => b.id === parseInt(id));

    // If book not found
    if (!book) {
        return (
            <div className="text-center py-20">
                <p className="text-xl text-gray-500">Book not found</p>
                <Link to='/' className="text-purple-600 inline-block">
                    ← Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div>
            <Link to='/' className="text-purple-600 mb-4 inline-block">
                ← Back to Home
            </Link>

            <div className="flex flex-col md:flex-row gap-8 mt-4">
                {/* Book cover */}
                <img src={book.cover}  alt={book.title} className="w-64 h-80 object-cover rounded-lg" />

                {/* Book info */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{book.author}</h1>
                    <p className="text-xl text-gray-500 mb-4">by {book.author}</p>

                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-3">
                        <span>
                            {'★'.repeat(book.rating)}{'☆'.repeat(5 - book.rating)}
                        </span>
                        <span className="text-gray-400">{book.rating}/5</span>
                    </div>

                    {/* Details */}
                    <div className="space-y-2 text-gray-600 mb-6">
                        <p>{book.pages} pages</p>
                        <p>Published: {book.year}</p>
                        <p>Genre: {book.genre}</p>
                    </div>

                    {/* Badges */}
                    <div className="flex gap-2">
                        {book.isNew && (
                            <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-lg">NEW</span>
                        )}
                        {book.isBestSeller && (
                            <span className="bg-yellow-500 text-white text-sm px-3 py-1 rounded-lg">🔥 BESTSELLER</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDetails;