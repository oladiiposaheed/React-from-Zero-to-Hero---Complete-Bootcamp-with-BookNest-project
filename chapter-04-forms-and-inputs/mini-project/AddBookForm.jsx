function AddBookForm({ formData, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      
      {/* Title */}
      <label>Title</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={onChange}
        placeholder="Book title"
        required
      />

      {/* Author */}
      <label>Author</label>
      <input
        type="text"
        name="author"
        value={formData.author}
        onChange={onChange}
        placeholder="Author name"
        required
      />

      {/* Year */}
      <label>Year</label>
      <input
        type="number"
        name="year"
        value={formData.year}
        onChange={onChange}
        placeholder="2025"
      />

      {/* Genre */}
      <label>Genre</label>
      <input
        type="text"
        name="genre"
        value={formData.genre}
        onChange={onChange}
        placeholder="Programming"
      />

      {/* Rating */}
      <label>Rating (1-5)</label>
      <input
        type="number"
        name="rating"
        value={formData.rating}
        onChange={onChange}
        placeholder="4"
        min="1"
        max="5"
      />

      {/* Pages */}
      <label>Pages</label>
      <input
        type="number"
        name="pages"
        value={formData.pages}
        onChange={onChange}
        placeholder="300"
      />

      <button type="submit">+ Add Book</button>

    </form>
  );
}

export default AddBookForm;