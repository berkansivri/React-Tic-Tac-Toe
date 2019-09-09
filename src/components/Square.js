import React, { useState, useContext } from 'react'
import GameContext from '../context/game-context'

const Square = ({ location, turn, setTurn }) => {
  const [sign, setSign] = useState("")
  const { dispatch } = useContext(GameContext)
  const handleOnClick = () => {
    dispatch({ type: "ADD_MOVE", sign, location })
    console.log(turn);
    setSign( turn === "X" ? "O" : "X" )
    setTurn( turn === "X" ? "O" : "X" )
  }
  
  return (
    <button className="square" onClick={handleOnClick}>
      {sign}
    </button>
  )
}

export { Square as default }