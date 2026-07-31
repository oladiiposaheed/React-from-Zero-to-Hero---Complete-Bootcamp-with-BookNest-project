import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "../contexts/CartContext";
import BookCard from '../components/BookCard';


// Sample book data
const book ={
    id: 1,
    title: 'Clean Code',
    author: 'Robert C. Martin',
    year: 2001,
    genre: 'Programming',
    rating: 4,
    pages: 464,
    isNew: true,
    isBestseller: true,
    cover: 'https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg',
};

// Helper function to render BookCard with required providers
function renderBookCard() {
    render(
        <CartProvider>
            <BrowserRouter>
                <BookCard book={book} isInCart={false} />
            </BrowserRouter>
        </CartProvider>
    );
}

// Test 1: Title shows correctly
test('shows book title', () => {
    renderBookCard();
    expect(screen.getByText('Clean Code')).toBeInTheDocument();
});


// Test 2: Author shows correctly
test('shows book author', () => {
    renderBookCard();
    expect(screen.getByText('by Robert C. Martin')).toBeInTheDocument();
});

// Test 3: Shows Add to Cart button when not in cart
test('show Add to Cart button', () => {
    renderBookCard();
    expect(screen.getByText('+ Add to Cart')).toBeInTheDocument();
});

// Test 4: Add to Cart button click
test('Add to Cart button is clickable', () => {
    renderBookCard();
    const button = screen.getByText('+ Add to Cart');

    // Check button exists and is a button element
    expect(button.tagName).toBe('BUTTON');
});