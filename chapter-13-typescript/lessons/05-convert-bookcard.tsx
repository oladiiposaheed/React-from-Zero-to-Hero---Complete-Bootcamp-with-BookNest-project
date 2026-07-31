// ==========================================
// BOOKCARD — TYPESCRIPT VERSION
// ==========================================

// Step 1: Define the Book interface
interface Book {
    id: number;
    title: string;
    author: string;
    year: number;
    genre: string;
    rating: number;
    pages: number;
    isNew: boolean;
    isBestseller: boolean;
    cover: string;
    quantity?: number;    // Optional - added by cart
}

// Step 2: Define the Props interface
interface BookCardProps {
    book: Book;          // Must be a Book object
    isInCart: boolean;   // Must be true or false
}

// Step 3: Use the interface
function BookCard({ book, isInCart }: BookCardProps) {

    return (
        <div>
            <img src={book.cover} alt={book.title} />
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <span>{'*'.repeat(book.rating)}</span>
            <span>{book.pages} pages</span>
            <span>{book.year}</span>
            <span>{book.genre}</span>
        </div>
    );
}

// ==========================================
// WHAT TYPESCRIPT CATCHES
// ==========================================

// Correct usage
const validBook: Book = {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2008,
    genre: "Programming",
    rating: 4,
    pages: 464,
    isNew: true,
    isBestseller: true,
    cover: "https://example.com/cover.jpg",
};


// ❌ Would show RED LINE in editor:
// const invalidBook: Book = {
//   id: 1,
//   title: "Clean Code",
//   // Missing: author, year, genre, rating, pages, isNew, isBestseller, cover
// };
