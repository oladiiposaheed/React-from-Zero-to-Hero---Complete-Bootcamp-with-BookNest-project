function AddBookForm({ formData, onChange, onSubmit }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">➕ Add a New Book</h2>

      <form onSubmit={onSubmit} className="space-y-4">
        
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={onChange}
            placeholder="Book title"
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-purple-500 focus:outline-none"
            required
          />
        </div>

        {/* Author */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={onChange}
            placeholder="Author name"
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-purple-500 focus:outline-none"
            required
          />
        </div>

        {/* Year and Genre side by side */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-gray-700 font-semibold mb-1">Year</label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={onChange}
              placeholder="2025"
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-purple-500 focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 font-semibold mb-1">Genre</label>
            <input
              type="text"
              name="genre"
              value={formData.genre}
              onChange={onChange}
              placeholder="Programming"
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-purple-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Rating and Pages side by side */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-gray-700 font-semibold mb-1">Rating (1-5)</label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={onChange}
              placeholder="4"
              min="1"
              max="5"
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-purple-500 focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 font-semibold mb-1">Pages</label>
            <input
              type="number"
              name="pages"
              value={formData.pages}
              onChange={onChange}
              placeholder="300"
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-purple-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          + Add Book
        </button>

      </form>
    </div>
  );
}

export default AddBookForm;