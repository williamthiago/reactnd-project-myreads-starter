import React from 'react'
import { shallow } from 'enzyme'

import Books from './Books'

it('Renders Books without books', () => {
  const books = []
  const onChangeShelf = () => {}
  expect(shallow(<Books books={books} onChangeShelf={onChangeShelf} />)).toMatchSnapshot()
})