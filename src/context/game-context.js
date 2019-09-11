import React, { useContext } from 'react'

const gameContext = React.createContext()

const useGameContext = () => useContext(gameContext)

export { gameContext as default, useGameContext }
