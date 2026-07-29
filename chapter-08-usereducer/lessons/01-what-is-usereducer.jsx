// ==========================================
// LESSON 1: What is useReducer?
// ==========================================
//
// useReducer = a hook for complex state logic.
//
// useState:
//   Multiple setter functions scattered around
//   Good for simple state (counter, text input)
//
// useReducer:
//   One function handles ALL state changes
//   Good for complex state (cart, form, game)
//
// PATTERN:
//   const [state, dispatch] = useReducer(reducer, initialState);
//   dispatch({ type: 'ACTION', payload: data });
//
// ANALOGY:
//   useState = many light switches
//   useReducer = one control panel
// ==========================================