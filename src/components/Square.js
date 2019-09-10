import React, { useContext } from 'react'
import GameContext from '../context/game-context'

const Square = ({ location, sign }) => {
  const { dispatch, turn, setTurn } = useContext(GameContext)

  const handleOnClick = () => {
    if(!!sign) return
    dispatch({ type: "ADD_MOVE", sign: turn, location })
    setTurn(turn === "X" ? "O" : "X")
  }
  
  return (
    <button className="square" onClick={handleOnClick}>
      {sign}
    </button>
  )
}

export { Square as default }
