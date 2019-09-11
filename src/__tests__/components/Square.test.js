import React from 'react'
import { shallow } from 'enzyme'
import Square from '../../components/Square'
import * as Context from '../../context/game-context'

let contextValues, SquareComp, wrapper

beforeEach(() => {
  contextValues = {
    dispatch: jest.fn(),
    turn: "X",
    setTurn: jest.fn()
  }

  jest.spyOn(Context, 'useGameContext')
      .mockImplementation(() => contextValues)
  
  wrapper = shallow(<Square location={1}/>)
})

test("should render square component correctly", () => {
  expect(wrapper).toMatchSnapshot()
})

test("handle on sign square", () => {
  wrapper.find("button").simulate("click")
  const { dispatch, turn, setTurn } = contextValues
  expect(dispatch).toHaveBeenLastCalledWith({ type:"ADD_MOVE", sign: turn, location: 1 })
  expect(setTurn).toHaveBeenLastCalledWith("O")
})