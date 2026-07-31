// ==========================================
// INTERFACES
// ==========================================

// Define the shape of a Book object
interface Book {
    title: string;    // Required — must be a string
    author: string;
    year: number;
    genre?: string;      // Optional — "?" means it can be missing
    isBestseller: boolean;     // Required — must be true or false
}

// Valid book — has all required properties
const book1: Book = {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    year: 2000,
    isBestseller: true,
};

// Also valid — genre is optional, can be missing
const book2: Book = {
    title: 'FDjango for Beginners',
    author: 'William Vincent',
    year: 2022,
    isBestseller: false,
}


// ==========================================
// INTERFACE FOR USER
// ==========================================
interface User {
    username: string;
    age?: number;   // Optional
    isLoggedIn: boolean;
}

const user: User = {
    username: 'Fatimah',
    isLoggedIn: true,
    // age is optional, so this is valid
}




// NOTE
// ❌ Invalid — missing required 'year' property
// const book3: Book = {
//   title: "React Book",
//   author: "John Doe",
//   isBestseller: true,
// };

// ❌ Invalid — 'year' should be number, not string
// const book4: Book = {
//   title: "React Book",
//   author: "John Doe",
//   year: "2020",
//   isBestseller: true,
// };