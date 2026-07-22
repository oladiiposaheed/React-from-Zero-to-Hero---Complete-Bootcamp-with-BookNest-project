import { useState } from 'react';

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: 'Clean Code', author: 'Robert C. Martin' },
    { id: 2, title: 'Python Crash Course', author: 'Eric Matthes' },
    { id: 3, title: 'React Up & Running', author: 'Stoyan Stefanov' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Filter logic: only keep books whose title contains the search term
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Search Books</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by title..."
      />

      <h2>Your Books ({filteredBooks.length})</h2>
      <ul>
        {filteredBooks.map(book => (
          <li key={book.id}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;