import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

// Layout — Header stays, content changes
function Layout() {
    return (
        <div>
            <header style={{ background: '#333', color: 'white', padding: '15px' }}>
                <h2>📚 BookNest</h2>
            </header>
            
            <nav style={{ display: 'flex', gap: '15px', padding: '10px', background: '#f0f0f0' }}>
                <Link to='/'>Home</Link>
                <Link to='/cart'>Cart</Link>
            </nav>

            <main style={{ padding: '20px', minHeight: '300px' }}>
                {/* Outlet — child route content appears here */}
                <Outlet />
            </main>

            <footer style={{ background: '#333', color: 'white', padding: '10px', textAlign: 'center' }}>
                <p>© 2026 BookNest</p>
            </footer>
        </div>
    );
}


// Pages
function Home() {
    return <h1>🏠 Home Page — Book List Here</h1>;
}

function Cart() {
    return <h1>🛒 Cart Page — Cart Items Here</h1>;
}


function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Nested routes — Layout wraps all children */}
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='cart' element={<Cart />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;