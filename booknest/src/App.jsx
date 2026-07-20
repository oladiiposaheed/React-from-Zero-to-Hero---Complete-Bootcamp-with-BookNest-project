// ==========================================
// HEADER COMPONENT
// ==========================================
function Header() {
  return (
    <header className="bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500 text-white p-10 rounded-2xl shadow-2xl mb-10">
      <div className="flex items-center gap-5">
        
        {/* Book emoji inside a frosted glass box */}
        <div className="bg-white/20 p-4 rounded-2xl">
          <span className="text-6xl">📚</span>
        </div>

        {/* App name and tagline */}
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight">BookNest</h1>
          <p className="text-indigo-100 mt-2 text-lg font-light">
            Discover, Track & Enjoy Your Favorite Books
          </p>
        </div>

      </div>
    </header>
  );
}

// ==========================================
// BOOK CARD COMPONENT
// ==========================================
function BookCard({ title, author, cover, year, genre, rating, pages, isNew, isBestseller }) {

  return (
    // White card container — FIXED: removed "absolute"
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-64 hover:shadow-xl transition-shadow">
      
      {/* IMAGE AREA: Cover image with badges on top */}
      <div className="relative">

        {/* Book cover image */}
        <img 
          src={cover} 
          alt={title}
          className="w-full h-56 object-cover"  
        />

        {/* NEW badge — top left corner */}
        {isNew && (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
            NEW
          </span>
        )}

        {/* BESTSELLER badge — top right corner */}
        {isBestseller && (
          <span className="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
            🔥 BESTSELLER
          </span>
        )}

      </div>

      {/* Book details */}
      <div className="p-5">
        <h3 className="font-bold text-gray-800 text-lg mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-3">by {author}</p>

        {/* Star rating */}
        <div className="flex items-center gap-1 mb-2">
          <span className="text-yellow-500 text-sm">
            {'★'.repeat(rating)}
            {'☆'.repeat(5 - rating)}
          </span>
          <span className="text-gray-400 text-xs">{rating}/5</span>
        </div>

        {/* Page count */}
        <div className="flex items-center gap-1 mb-3 text-gray-500 text-sm">
          <span>📄</span>
          <span>{pages} pages</span>
        </div>

        {/* Year and genre badges */}
        <div className="flex gap-2">
          <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">
            {year}
          </span>
          <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
            {genre}
          </span>
        </div>

      </div>
    </div>
  );
}

// ==========================================
// BOOK LIST COMPONENT
// ==========================================
function BookList() {
  // Array of 8 books with all details
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

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-6"></h2>

      {/* Grid: 1 column mobile, 2 tablet, 4 desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map(book => (
          <BookCard 
            key={book.id}
            title={book.title}
            author={book.author}
            cover={book.cover}
            year={book.year}
            genre={book.genre}
            rating={book.rating}
            pages={book.pages}
            isNew={book.isNew}
            isBestseller={book.isBestseller}
          />
        ))}
      </div>
    </section>
  );
}


// ==========================================
// APP COMPONENT (Root)
// ==========================================
function App() {
  return (
    // Page background with subtle gradient
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <Header />
        <BookList />
      </div>
    </div>
  );
}

export default App;