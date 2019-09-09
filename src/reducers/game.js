const gameReducer = (state, action) => {
  switch (action.key) {
    case "ADD_MOVE":
      return [...state, { sign: action.sign, location: action.location }]
    default:
      return state
  }
}

export { gameReducer as default }