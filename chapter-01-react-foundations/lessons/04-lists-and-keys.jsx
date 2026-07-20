function App() {
    // Array of books — each book is an object
    const books = [
        { id: 1, title: 'Clean Code', author: 'Robert C. Martin' },
        { id: 2, title: 'Python Crash Course', author: 'Eric Matthes' },
        { id: 3, title: 'JavaScript: Good Parts', author: 'Douglas Crockford' },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">My Books</h1>

            {/* Loop through books array using .map() */}
            {books.map(book => (
                // key is REQUIRED — use unique id
                <div className="bg-white rounded-lg shadow p-4 mb-3">
                    <h3 className="font-bold text-gray-800">{book.title}</h3>
                    <p className="text-gray-500 text-sm">by {book.author}</p>
                </div>
            ))}
        </div>
    );
}

export default App