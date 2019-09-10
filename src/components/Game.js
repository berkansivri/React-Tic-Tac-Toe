import React, { useReducer, useState, useEffect } from 'react'
import Board from './Board'
import gameReducer from '../reducers/game'
import GameContext from '../context/game-context'

const Game = () => {
  const [moves, dispatch] = useReducer(gameReducer, new Array(9).fill(null))
  const [turn, setTurn] = useState("X")

  const checkWinner = () => {
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
    for (let line of lines) {
      const [a,b,c] = line
      if(moves[a] && moves[a] === moves[b] && moves[a] === moves[c])
        return moves[a]
    }
    return null
  }

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
    const winner = checkWinner()
    if(winner) {
      alert("winner: " + winner)
    } 
  })

  return (
    <GameContext.Provider value={{ moves, dispatch, turn, setTurn }}>
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <p>Turn: {turn}</p>
          {/* TODO */}
        </div>
      </div>
    </GameContext.Provider>
  )
}

export { Game as default }
