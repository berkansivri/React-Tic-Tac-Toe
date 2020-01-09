const gameReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_MOVES":
      return action.moves
    case "ADD_MOVE":
      const {location, sign} = action
      return [...state, { location, sign }]
    case "GO_MOVE":
      return state.slice(0, action.step + 1)
    case "CLEAR_MOVES":
      return []
    default:
      return state
  }
}

export { gameReducer as default }
