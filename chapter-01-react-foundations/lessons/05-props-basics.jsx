// Child component — receives props

function BookCard({ title, author }) {
  return (
    <div className='bg-white rounded-lg shadow p-4 mb-3'>
      <h3 className='font-bold text-gray-800'>{title}</h3>
      <p className='text-gray-500 text-sm'>{author}</p>
    </div>
  );
}


// Parent component — passes props
function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className='text-3xl font-bold text-gray-800 mb-6'>My Books</h1>

      {/* Same component, different props */}
      <BookCard title='Clean Code' author='Robert C. Martin' />
      <BookCard title='Python Crash Course' author='Eric Matthes' />
      <BookCard title='JavaScript: Good Parts' author='Douglas Crockford' />
    </div>
  )
}


export default App;