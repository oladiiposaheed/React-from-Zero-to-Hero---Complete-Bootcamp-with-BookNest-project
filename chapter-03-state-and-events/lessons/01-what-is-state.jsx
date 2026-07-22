// ==========================================
// LESSON 1: What is State?
// ==========================================
//
// State = data that changes over time.
//
// Without state:
//   const count = 0;  ← Always 0, never changes
//
// With state:
//   const [count, setCount] = useState(0);
//   count = current value
//   setCount = function to change it
//
// When state changes:
//   1. React detects the change
//   2. React re-renders the component
//   3. Screen shows new value
//
// REAL EXAMPLES OF STATE:
//   - Cart count (number)
//   - Search text (string)
//   - Form inputs (object)
//   - List of items (array)
//   - Dark mode toggle (boolean)
// ==========================================