import React, { useContext } from 'react'
import Square from './Square'
import GameContext from '../context/game-context'

const Board = () => {
  const { moves, turn } = useContext(GameContext)

  const renderSquare = (i) => {
    const move = moves.find(m => m.location === i)
    return (
      <Square location={i} sign={move && move.sign}/>
    )
  }

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <p style={{textAlign:"center"}}>Turn: {turn}</p>
    </div>
  )
}

export { Board as default }
