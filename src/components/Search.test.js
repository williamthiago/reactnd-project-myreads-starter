import React from 'react'
import { shallow } from 'enzyme'

import Search from './Search'

it('Renders Search without crashing', () => {
  const books = []
  const onChangeShelf = () => {}
  expect(shallow(<Search books={books} onChangeShelf={onChangeShelf} />)).toMatchSnapshot()
})