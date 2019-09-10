const gameReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_MOVES":
      return action.moves
    case "ADD_MOVE":
      state[action.location] = action.sign
      return state
    default:
      return state
  }
}

export { gameReducer as default }
