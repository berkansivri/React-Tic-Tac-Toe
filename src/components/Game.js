import React, { useReducer, useState, useEffect } from 'react'
import Board from './Board'
import gameReducer from '../reducers/game'
import GameContext from '../context/game-context'
import useCheckWinner, { setNewGame } from '../hooks/useCheckWinner'

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

  const getMoves = () => {
    return moves.map(({ location, sign }) => {
      return (
        <li key={location}>
          <p>{`${sign} to position [${Math.floor(location/3+1)},${location%3+1}]`}</p>
        </li>
      )
    })
  }

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
          <p>Turn: {turn} <button style={{marginLeft:'20px'}} onClick={() => setNewGame(dispatch)}>New Game</button></p>
          <ol>{ getMoves() }</ol>
        </div>
      </div>
    </GameContext.Provider>
  )
}


export { Game as default }
