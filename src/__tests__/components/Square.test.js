import React from 'react'
import { shallow } from 'enzyme'
import Square from '../../components/Square'
import * as Context from '../../context/game-context'
import GameContext from '../../context/game-context'

let contextValues, SquareComp

beforeEach(() => {
  contextValues = {
    dispatch: jest.fn(),
    turn: "X",
    setTurn: jest.fn()
  }
  SquareComp = () => (
    <GameContext.Provider value={{...contextValues}}>
      <Square location={1} sign={"X"} />
    </GameContext.Provider>
  )
})

test("should render square component correctly", () => {
  const wrapper = shallow(<SquareComp />)
  expect(wrapper).toMatchSnapshot()
})

test("handle on sign square", () => {
  jest.spyOn(Context, 'useGameContext')
      .mockImplementation(() => contextValues)
  
  const wrapper = shallow(<Square location={1}/>)
  wrapper.find("button").simulate("click")
  const { dispatch, turn, setTurn } = contextValues
  expect(dispatch).toHaveBeenLastCalledWith({ type:"ADD_MOVE", sign: turn, location: 1 })
  expect(setTurn).toHaveBeenLastCalledWith("O")
})