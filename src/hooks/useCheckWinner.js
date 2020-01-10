import { useEffect } from 'react'

const useCheckWinner = ({ moves,dispatch }) => {
  useEffect(() => {
    console.log("checkwinner effect");
    const winner = checkWinner(moves)
    if (winner) {
      if (winner === "tie") {
        if(window.confirm(`Game draw! New game?`)) {
          setNewGame(dispatch)
        }
      }
      else if(window.confirm(`Winner: ~${winner}~! New game?`)) {
        setNewGame(dispatch)
      }
    }
  })
}

const setNewGame = (dispatch) => {
  localStorage.removeItem("xox")
  dispatch({ type:"CLEAR_MOVES" })
}

const checkWinner = (moves) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  const arr =[]
  moves.map(m => arr[m.location] = m.sign)
  
  for (let line of lines) {
    const [a,b,c] = line
    if(arr[a] && arr[a] === arr[b] && arr[a] === arr[c])
      return arr[a]
  }
  if (moves.length === 9) return "tie"
  else return null
}

export { setNewGame, checkWinner, useCheckWinner as default }