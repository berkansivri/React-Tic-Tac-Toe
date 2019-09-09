import React from 'react'
import Board from './Board'

const Game = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        {/* TODO */}
      </div>
    </div>
  )
}

export { Game as default }