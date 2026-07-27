import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

// Home page
function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>🏠 Home Page</h1>
            <Link to='/about'>Go to About (Link)</Link>

            <br /><br />

            {/* navigate() — redirect on click */}
            <button onClick={() => navigate('/about')}>
                Go to About (navigate)
            </button>

            <br /><br />

            {/* navigate(-1) — go back */}
            <button onClick={() => navigate(-1)}>
                ← Go Back
            </button>
        </div>
    );
}

// About page
function About() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>ℹ️ About Page</h1>
            <Link to='/'>Go to Home</Link>

            <br /><br />

            {/* navigate('/') — go to home */}
            <button onClick={() => navigate('/')}>
                Back to Home (navigate)
            </button>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <div style={{ padding: '20px' }}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;