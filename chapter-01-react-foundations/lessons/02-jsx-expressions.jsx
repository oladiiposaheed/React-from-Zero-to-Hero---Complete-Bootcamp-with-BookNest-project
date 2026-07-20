// Lesson 2: JSX Expressions
// Use curly braces {} to embed JavaScript in HTML.

function App() {
  const name = "Fatimah";
  const age = 25;
  const books = 8;

  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <p>You are {age} years old.</p>
      <p>You have {books} books.</p>
      <p>In 5 years you'll be {age + 5}.</p>
    </div>
  );
}

export default App;