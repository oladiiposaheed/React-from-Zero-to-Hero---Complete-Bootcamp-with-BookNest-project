// ==========================================
// LESSON 3: Dispatch & Actions
// ==========================================
//
// dispatch = sends actions to the reducer
// action   = { type: 'WHAT_TO_DO', extraData }
//
// FLOW:
//   1. Component calls dispatch(action)
//   2. Reducer receives (state, action)
//   3. Reducer returns new state
//   4. React re-renders
//
// ACTION EXAMPLES:
//   dispatch({ type: 'ADD', book: {...} })
//   dispatch({ type: 'REMOVE', id: 3 })
//   dispatch({ type: 'CLEAR' })
//   dispatch({ type: 'UPDATE_QTY', id: 3, quantity: 5 })
// ==========================================