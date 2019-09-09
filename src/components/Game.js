import React,{ useReducer } from 'react'
import Board from './Board'
import GameReducer from '../reducers/game'
import GameContext from '../context/game-context'

const Game = () => {
  const [moves, dispatch] = useReducer(GameReducer, [])

  return (
    <GameContext.Provider value={{ moves, dispatch }}>
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          {/* TODO */}
        </div>
      </div>
    </GameContext.Provider>
  )
}

export { Game as default }
