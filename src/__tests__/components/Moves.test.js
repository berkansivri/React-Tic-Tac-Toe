import React from 'react'
import { shallow } from 'enzyme'
import Moves from '../../components/Moves'
import * as Context from '../../context/game-context'
import moves from '../fixtures/moves'

let contextValues, wrapper

beforeEach(() => {
  contextValues = {
    dispatch: jest.fn(),
    setTurn: jest.fn(),
    moves
  }

  jest.spyOn(Context, 'useGameContext')
      .mockImplementation(() => contextValues)
  
  wrapper = shallow(<Moves />)
})

test("should render Moves component correctly", () => {
  expect(wrapper).toMatchSnapshot()
})

test("should render all moves correctly", () => {
  expect(wrapper.find("li")).toHaveLength(moves.length)
})

test("should handle on click new game", () => {
  wrapper.find("#btnNewGame").simulate("click")
  expect(contextValues.dispatch).toHaveBeenCalledWith({ type:"CLEAR_MOVES" })
})

test("should handle go move", () => {
  wrapper.find("#btnGoMove").first().simulate("click")
  expect(contextValues.dispatch).toHaveBeenCalledWith({type: "GO_MOVE", step: 0 })
  expect(contextValues.setTurn).toHaveBeenCalledWith(moves[0].sign === "X" ? "O" : "X")
})