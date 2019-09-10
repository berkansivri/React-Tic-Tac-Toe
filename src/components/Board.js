import React, { useContext } from 'react'
import Square from './Square'
import GameContext from '../context/game-context'

const Board = () => {
  const { moves } = useContext(GameContext)

  const renderSquare = (i) => {
    return (
      <Square location={i} sign={moves[i]}/>
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
    </div>
  )
}

export { Board as default }
