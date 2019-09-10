import React, { useContext } from 'react'
import GameContext from '../context/game-context' 
import { setNewGame } from '../hooks/useCheckWinner'

const Moves = () => {
  const { moves, dispatch, turn } = useContext(GameContext)

  const getMoves = () => {
    return moves.map(({ location, sign }) => {
      return (
        <li key={location}>
          <p>{`${sign} to position [${Math.floor(location/3+1)},${location%3+1}]`}</p>
        </li>
      )
    })
  }

  return (
    <>
      <p>Turn: {turn} <button style={{marginLeft:'20px'}} onClick={() => setNewGame(dispatch)}>New Game</button></p>
      <ol>{ getMoves() }</ol>
    </>
  )
}

export { Moves as default }