import React from 'react'
import { shallow } from 'enzyme'
import Game from '../../components/Game'

test("should render game component correctly", () => {
  let wrapper = shallow(<Game />)
  expect(wrapper).toMatchSnapshot()
})
