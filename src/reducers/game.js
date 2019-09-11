const gameReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_MOVES":
      return action.moves
    case "ADD_MOVE":
      const {location, sign} = action
      const newMove = { location, sign }
      return [...state, newMove]
    case "GO_MOVE":
      console.log(action);
      return state.slice(0, action.step + 1)
    case "CLEAR_MOVES":
      return []
    default:
      return state
  }
}

export { gameReducer as default }
