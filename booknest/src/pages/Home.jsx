import BookList from '../components/BookList';

// Receive and show the data

function Home({ books, loading, error, searchTerm, onSearchChange }) {
    return (
        <BookList 
            books={books}
            loading={loading}
            error={error}
            searchTerm={searchTerm}
            onSearchChange={onSearchChange}
            // cart={cart}
            // onAddToCart={onAddToCart}
            // onRemoveFromCart={onRemoveFromCart}
        />
    );
}

export default Home;