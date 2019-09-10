import React, { useReducer, useState, useEffect } from 'react'
import Board from './Board'
import gameReducer from '../reducers/game'
import GameContext from '../context/game-context'
import useCheckWinner from '../hooks/useCheckWinner'
import Moves from './Moves'

const Game = () => {
  const [moves, dispatch] = useReducer(gameReducer, [])
  const [turn, setTurn] = useState("X")
  useCheckWinner({ moves, dispatch })

  useEffect(() => {
    const xox = JSON.parse(localStorage.getItem("xox"))
    if(xox) {
      const { moves, turn } = xox
      dispatch({ type:"POPULATE_MOVES", moves })
      setTurn(turn)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("xox", JSON.stringify({ moves, turn }))
  },[moves, turn])

  return (
    <GameContext.Provider value={{ moves, dispatch, turn, setTurn }}>
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <Moves />
        </div>
      </div>
    </GameContext.Provider>
  )
}


export { Game as default }
