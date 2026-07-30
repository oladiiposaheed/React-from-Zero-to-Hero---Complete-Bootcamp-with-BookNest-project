// ==========================================
// LESSON 1: What are Custom Hooks?
// ==========================================
//
// Custom Hook = a function that uses React hooks.
//
// RULES:
//   1. Name starts with "use" (useCounter, useFetch)
//   2. Can use useState, useEffect, etc. inside
//   3. Returns values/functions for components to use
//
// WHY:
//   Reuse logic instead of copying code.
//   Keep components clean.
//
// PATTERN:
//   function useSomething() {
//     const [state, setState] = useState();
//     useEffect(() => { ... }, []);
//     return { state, doSomething };
//   }
// ==========================================


// Custom hook — starts with "use"
// function useCounter(initialValue = 0) {
//   const [count, setCount] = useState(initialValue);
  
//   const increase = () => setCount(count + 1);
//   const decrease = () => setCount(count - 1);
//   const reset = () => setCount(initialValue);
  
//   return { count, increase, decrease, reset };
// }

// // Using the hook in a component
// function App() {
//   const { count, increase, decrease, reset } = useCounter(0);
  
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={increase}>+</button>
//       <button onClick={decrease}>-</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }