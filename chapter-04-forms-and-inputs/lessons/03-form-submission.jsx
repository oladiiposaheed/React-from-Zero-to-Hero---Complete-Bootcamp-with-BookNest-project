import { useState } from "react";


function App() {
  // Books stored in state — starts with 2 books
  const [books, setBooks] = useState([
    { id: 1, title: 'Clean Code', author: 'Robert C. Martin' },
    { id: 2, title: 'Python Crash Course', author: 'Eric Matthes' },
  ]);

  // Tracks the next available ID for new books
  const [nextId, setNextId] = useState(3);  // Starts at 3 because we have books 1 and 2

  // Form state — holds what user types
  const [formData, setFormData] = useState({
    // Starts empty
    title: '',
    author: '',
  });

  // Handles typing in ANY field
  const handleChange = (e) => {
    const { name, value } = e.target;    // Which field + what user typed
    setFormData({
      ...formData,       // Keep other fields unchanged
      [name]: value      // Update this field
    });
  };

  // Add handleSubmit function(Runs when user clicks "Add Book")
  const handleSubmit = (e) => {
    e.preventDefault();     // Stop page from refreshing

    // Create a new book object from form data
    const newBook = {
      id: nextId,                          // Use current nextId (3, 4, 5...)
      title: formData.title,               // Whatever user typed in title
      author: formData.author              // Whatever user typed in author
    };

    // Add new book to the list
    setBooks([...books, newBook]);           // Old books + new book

    // Increment ID so next book gets a different ID
    setNextId(nextId + 1);

    // Clear the form so user can add another
    setFormData({'title': '', author: ''});
  };




  return (
    <div>
      <h2>Add a Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Book title" />
        <input type="text" name="author" value={formData.author} onChange={handleChange} placeholder="Author name" />

        <button typeof="submiit">Add Book</button>

      </form>
      <h2>Your Books ({books.length})</h2>

      {/* Show each book */}
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;