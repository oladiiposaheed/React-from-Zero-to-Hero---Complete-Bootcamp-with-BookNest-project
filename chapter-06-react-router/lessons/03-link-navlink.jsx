import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';


// Pages
function Home() {
  return <h1>🏠 Home Page</h1>
}

function About() {
  return <h1>ℹ️ About Page</h1>;
}

function Contact() {
  return <h1>📞 Contact Page</h1>;
}


function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Navigation bar */}
        <nav style={{ display: 'flex', gap: '20px', padding:'10px', background:'#f0f0f0' }}>
          
          {/* NavLink — shows active state */}
          <NavLink
            to='/'
            style={({ isActive }) => ({
              fontWeight: isActive ? 'bold' : 'normal',
              color: isActive ? 'purple' : 'black',
            })}
          >
            Home
          </NavLink>

          <NavLink
            to='/about'
            style={({ isActive }) => ({
              fontWeight: isActive ? 'bold' : 'normal',
              color: isActive ? 'purple' : 'black',
            })}
          >
            About
          </NavLink>

          <NavLink
            to='/contact'
            style={({ isActive }) => ({
              fontWeight: isActive ? 'bold' : 'normal',
              color: isActive ? 'purple' : 'black',
            })}
          >
            Contact
          </NavLink>

        </nav>

        {/* Page content changes here */}
        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;