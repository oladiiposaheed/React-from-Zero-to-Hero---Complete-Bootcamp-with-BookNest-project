import Header from './components/Header';    
import BookCard from './components/BookCard';
import BookList from './components/BookList';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <Header />
        <BookList />
      </div>
    </div>
  );
}

export default App;