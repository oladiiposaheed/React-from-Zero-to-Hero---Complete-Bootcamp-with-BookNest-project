import BookList from '../components/BookList';

// Receive and show the data

function Home({ books, loading, error, cart, searchTerm, onSearchChange, onAddToCart, onRemoveFromCart }) {
    return (
        <BookList 
            books={books}
            loading={loading}
            error={error}
            cart={cart}
            searchTerm={searchTerm}
            onSearchChange={onSearchChange}
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
        />
    );
}

export default Home;