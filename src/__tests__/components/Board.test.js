import React from 'react'
import { shallow } from 'enzyme'
import Board from '../../components/Board'
import * as Context from '../../context/game-context'
import moves from '../fixtures/moves'

let contextValues, wrapper

beforeEach(() => {
  contextValues = {
    dispatch: jest.fn(),
    turn: "X",
    setTurn: jest.fn(),
    moves
  }
  jest.spyOn(Context, 'useGameContext')
      .mockImplementation(() => contextValues)
  
  wrapper = shallow(<Board />)
})

test("should render board component correctly", () => {
  expect(wrapper).toMatchSnapshot()
})

test("should render all square", () => {
  expect(wrapper.find("Square")).toHaveLength(9)
  const xSignLengh = moves.filter(m=>m.sign === "X").length
  const ySignLengh = moves.filter(m=>m.sign === "Y").length
  expect(wrapper.find("Square").find({ sign:"X" })).toHaveLength(xSignLengh)
  expect(wrapper.find("Square").find({ sign:"Y" })).toHaveLength(ySignLengh)
})