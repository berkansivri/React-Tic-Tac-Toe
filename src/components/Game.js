import React, { useReducer, useState, useEffect } from 'react'
import Board from './Board'
import gameReducer from '../reducers/game'
import GameContext from '../context/game-context'
import useCheckWinner from '../hooks/useCheckWinner'
import Moves from './Moves'

const Game = () => {
  const [moves, dispatch] = useReducer(gameReducer, [])
  const [turn, setTurn] = useState("X")
  const [type, setType] = useState("single")
  useCheckWinner({ moves, dispatch })

  useEffect(() => {
    const xox = JSON.parse(localStorage.getItem("xox"))
    if(xox) {
      const { moves, turn, type } = xox
      dispatch({ type:"POPULATE_MOVES", moves })
      setType(type)
      setTurn(turn)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("xox", JSON.stringify({ moves, turn, type }))
  }, [moves, turn, type])

  return (
    <GameContext.Provider value={{ moves, dispatch, turn, setTurn, type, setType }}>
      <div className="container game">
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
