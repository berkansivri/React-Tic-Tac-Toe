import React, { useEffect } from 'react'
import { useGameContext } from '../context/game-context'
import { checkWinner } from '../hooks/useCheckWinner'

const Square = ({ location, sign }) => {
  const { moves, dispatch, turn, setTurn, type } = useGameContext()

  const handleSignSquare = () => {
    if(!!sign) return
    dispatch({ type: "ADD_MOVE", sign: turn, location })
    setTurn(turn === "X" ? "O" : "X")
    // TODO
    play([...moves])
  }

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
    setTurn("X")
    dispatch({ type: "ADD_MOVE", sign: "O", location: playIndex })
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
    if (type === "multi" && turn === "O") {
      console.log("effect hook");
      // play([...moves])
    }
    return () => {}
    // eslint-disable-next-line
  }, [turn])
  
  return (
    <button className="square" onClick={handleSignSquare}>
      {sign}
    </button>
  )
}

export { Square as default }
