import React from 'react'
import Square from './Square'

const Board = () => {
  const squares = (s) => {
    return (
      <div className="board-row">
        { [...Array(3).keys()].map((n) => (<Square key={n+(s*3)} />)) }
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