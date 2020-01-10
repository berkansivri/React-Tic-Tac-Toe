import React, { useReducer, useState, useEffect } from 'react'
import Board from './Board'
import gameReducer from '../reducers/game'
import GameContext from '../context/game-context'
import useCheckWinner from '../hooks/useCheckWinner'
import Moves from './Moves'
import { checkWinner } from '../hooks/useCheckWinner'

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
  }, [moves, turn])

  const scores = {
    X: -10,
    O: 10,
    tie: 0
  }

  const play = (movesClone) => {
    let bestScore = -Infinity
    let playIndex = -1
    for (let i = 0; i < 9; i++) {
      const index = movesClone.findIndex(x => x.location === i)
      if (index === -1) {
        movesClone.push({ location: i, sign: turn })
        let score = minimax(movesClone, 0)
        movesClone.pop()
        if (score > bestScore) {
          bestScore = score
          playIndex = i
        }
      }
    }
    console.log("addmove dispatch");
    dispatch({ type: "ADD_MOVE", sign: "O", location: playIndex })
    setTurn("X")
  }

  const minimax = (movesClone, depth, isMaximizing) => {
    const ai = checkWinner(movesClone)
    if (ai) {
      return scores[ai]
    }

    if (isMaximizing) {
      let bestScore = -Infinity
      for (let i = 0; i < 9; i++) {
        const index = movesClone.findIndex(x => x.location === i)
        if (index === -1) {
          movesClone.push({ location: i, sign: "O" })
          let score = minimax(movesClone, depth + 1, false)
          movesClone.pop()
          bestScore = Math.max(score, bestScore)
        }
      }
      return bestScore
    } else {
      let bestScore = Infinity
      for (let i = 0; i < 9; i++) {
        const index = movesClone.findIndex(x => x.location === i)
        if (index === -1) {
          movesClone.push({ location: i, sign: "X" })
          let score = minimax(movesClone, depth + 1, true)
          movesClone.pop()
          bestScore = Math.min(score, bestScore)
        }
      }
      return bestScore
    }
  }

  useEffect(() => {
    if (turn === "O") {
      if (moves.length < 9) 
        play([...moves])
      else
        setTurn("X")
    }
    // eslint-disable-next-line
  }, [turn])

  return (
    <GameContext.Provider value={{ moves, dispatch, turn, setTurn }}>
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
