import React from 'react'
import { useGameContext } from '../context/game-context' 
import { setNewGame } from '../hooks/useCheckWinner'

const Moves = () => {
  const { moves, dispatch, setTurn } = useGameContext()
  
  const handleGoMove = (step) => {
    dispatch({type: "GO_MOVE", step })
    setTurn(moves[step].sign === "X" ? "O" : "X")
  }

  const handleNewGame = () => {
    setNewGame(dispatch)
  }

  const getMoves = () => {
    return moves.map(({ location, sign }, index) => {
      return (
        <li key={location} style={{ height: '35px' }}>
          <p style={{ display: "inline-block" }}>
            {`${sign} to position [${Math.floor(location / 3 + 1)},${location % 3 + 1}]`}
          </p>
          <button style={{ marginLeft: '5px' }} id="btnGoMove" onClick={() => handleGoMove(index)}>
            Go
          </button>
        </li>
      )
    })
  }

  return (
    <>
      <button id="btnNewGame" style={{ marginLeft: '20px' }} onClick={handleNewGame}>
        New Game
      </button>
      <ol style={{ marginTop: '0px' }}>
        {getMoves()}
      </ol>
    </>
  )
}

export { Moves as default }