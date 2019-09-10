const gameReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_MOVES":
      return action.moves
    case "ADD_MOVE":
      const {location, sign} = action
      const newMove = { location, sign }
      return [...state, newMove]
    case "CLEAR_MOVES":
      return []
    default:
      return state
  }
}

export { gameReducer as default }
