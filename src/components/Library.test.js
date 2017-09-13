import React from 'react'
import { shallow } from 'enzyme'

import Library from './Library'

it('Renders Library without books', () => {
  const books = []
  const onChangeShelf = () => {}
  expect(shallow(<Library books={books} onChangeShelf={onChangeShelf} />)).toMatchSnapshot()
})