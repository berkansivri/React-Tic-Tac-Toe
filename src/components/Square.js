import React from 'react'
import { useGameContext } from '../context/game-context'

const Square = ({ location, sign }) => {
  const { dispatch, turn, setTurn } = useGameContext()

  const handleSignSquare = () => {
    if(!!sign) return
    dispatch({ type: "ADD_MOVE", sign: turn, location })
    setTurn("O")
  }
  
  return (
    <button className="square" onClick={handleSignSquare}>
      {sign}
    </button>
  )
}

export { Square as default }
