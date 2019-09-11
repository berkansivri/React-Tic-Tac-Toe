import gameReducer from '../../reducers/game'
import moves from '../fixtures/moves'

test("should populate moves", () => {
  const state = gameReducer(undefined, { moves, type: "POPULATE_MOVES" })
  expect(state).toEqual(moves)
})

test("should add move", () => {
  const move = { location:7, sign:"TEST" }
  const state = gameReducer(moves, { type: "ADD_MOVE", ...move })
  expect(state).toEqual([...moves, move])
})

test("should go move", () => {
  const state = gameReducer(moves, { step:3, type:"GO_MOVE" })
  expect(state).toEqual(moves.slice(0,4))
})

test("should clear moves", () => {
  const state = gameReducer(moves, { type:"CLEAR_MOVES" })
  expect(state).toEqual([])
})