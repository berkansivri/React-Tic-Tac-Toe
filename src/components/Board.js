import React, { useState, useContext } from 'react'
import Square from './Square'
import GameContext from '../context/game-context'

const Board = () => {
  const [turn, setTurn] = useState("")

  const squares = (s) => {
    return (
      <div className="board-row">
        { [...Array(3).keys()].map((n) => {
            let key = n+(s*3)
            return (<Square key={key} location={key} turn={turn} setTurn={setTurn} />)
          }
        ) }
      </div>
    )
  }
  return (
    [...Array(3).keys()].map((s) => (
      squares(s)
    ))
  )
}

export { Board as default }