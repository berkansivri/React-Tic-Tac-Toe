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
    dispatch({ type: "ADD_MOVE", sign: "O", location: playIndex })
    setTurn("X")
    console.log(bestScore);
    console.log(playIndex);
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
    if (type === "single" && turn === "O") {
      console.log("effect hook");
      play([...moves])
    }
    // eslint-disable-next-line
  }, [turn])

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
