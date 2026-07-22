import { useState } from "react";

function App() {
  // One state object holds both title and author
  const [formData, setFormDate] = useState({
    title: '',
    author: '',
  });

  return (
    <div>
      <input 
        type="text"
        name="title"
        value={formData.title}
        onChange={(e) => setFormDate({ ...formData, title: e.target.value })}
        placeholder="Book title"
      />

      <input 
        type="text" 
        name="author"
        value={formData.author}
        onChange={(e) => setFormDate({ ...formData, author: e.target.value })}
        placeholder="Author name"
      />

      <p>Title: {formData.title}</p>
      <p>Author: {formData.author}</p>
    </div>
  );
}

export default App;


// Better and shorter


import { useState } from "react";

function App() {
  // One state object holds both title and author
  const [formData, setFormDate] = useState({
    title: '',
    author: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDate({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <input 
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Book title"
      />

      <input 
        type="text" 
        name="author"
        value={formData.author}
        onChange={handleChange}
        placeholder="Author name"
      />

      <p>Title: {formData.title}</p>
      <p>Author: {formData.author}</p>
    </div>
  );
}

export default App;