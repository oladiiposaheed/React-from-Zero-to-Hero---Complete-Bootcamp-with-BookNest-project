// ==========================================
// LESSON 4: useContext
// ==========================================
//
// useContext = read data from a context.
//
// PATTERN:
//   const { cart, addToCart } = useContext(CartContext);
//
// RULES:
//   1. Must be inside a Provider
//   2. Can read multiple contexts
//   3. Re-renders when Provider value changes
//
// WITHOUT CONTEXT:
//   function Header({ cart }) { ... }  ← needs props
//
// WITH CONTEXT:
//   function Header() {                ← no props needed
//     const { cart } = useContext(CartContext);
//   }
// ==========================================