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

  // Add Search State + Input
  const [searchTerm, setSearchTerm] = useState('');

  // Add Error state — empty object = no errors
  const [errors, setErrors] = useState({});

  // Handles typing in ANY field
  const handleChange = (e) => {
    const { name, value } = e.target;    // Which field + what user typed
    setFormData({
      ...formData,       // Keep other fields unchanged
      [name]: value      // Update this field
    });

    // Clear error for this field when user starts typing
    if (value.trim() !== '') {
      setErrors({
        ...errors,         // Keep other errors
        [name]: ''         // Clear THIS field's error
      })
    }
  };

  // Form Validation: check if form is valid
  const validationForm = () => {
    const newErrors = {};
    
    // Check title - is it empty?
    if (formData.title.trim() === '') {
      newErrors.title = 'Title is required';
    }

    // Check author — is it empty?
    if (formData.author.trim() === '') {
      newErrors.author = 'Author is required';
    }

    return newErrors;
    // If both filled: {}
    // If title empty: { title: 'Title is required' }
    // If both empty: { title: '...', author: '...' }
  }

  // Add handleSubmit function(Runs when user clicks "Add Book")
  const handleSubmit = (e) => {
    e.preventDefault();     // Stop page from refreshing

    // Check validation First
    const validationErrors = validationForm();

    // If there are errors, show them and STOP
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);  // Show errors on screen
      return;        // STOP - don't add book
    }

    // Create a new book object from form data if no errors
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
    setErrors({});   // Clear errors on success
  };

  // Filter logic
  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div>
      <h2>Search Books</h2>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search by title..." />
      <h2>Add a Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Book title" />
        {/* Show error if title is invalid */}
        {errors.title && (
          <p style={{ color: 'red', fontSize:'14px' }}>{errors.title}</p>
        )}
        <input type="text" name="author" value={formData.author} onChange={handleChange} placeholder="Author name" />
        {/* Show error if author is invalid */}
        {errors.author && (
          <p style={{ color:'red', fontSize: '14px' }}>{errors.author}</p>
        )}

        <button type="submiit">Add Book</button>

      </form>

      <h2>Your Books ({filteredBooks.length})</h2>
      <ul>
        {filteredBooks.map(book => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>

      {/* <h2>Your Books ({books.length})</h2> */}

      {/* Show each book */}
      {/* <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;