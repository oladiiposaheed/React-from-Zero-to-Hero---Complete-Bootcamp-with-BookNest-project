import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';


// Home page — shows list of links
function Home() {
  return (
    <div>
      <h1>🏠 Book Store</h1>
      <p>Click a book to see details:</p>

      <ul>
        <li><Link to='/book/1'>Book #1</Link></li>
        <li><Link to='/book/2'>Book #2</Link></li>
        <li><Link to='/book/3'>Book #3</Link></li>
      </ul>
    </div>
  );
}

// Book details page — reads ID from URL
function BookDetails() {
  // useParams gets the :id from the URL
  const { id } = useParams();

  return (
    <div>
      <h1>📖 Book Details</h1>
      <p>You are viewing book #{id}</p>
      <Link to='/'>Back to Home</Link>
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px',  background: 'green', color: 'white'}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book/:id' element={<BookDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;