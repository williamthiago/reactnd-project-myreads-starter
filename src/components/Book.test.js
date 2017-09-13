import React from 'react'
import { shallow } from 'enzyme'

import Book from './Book'

it('Renders Book without crashing', () => {
  const onChangeShelf = () => {}
  const book = sampleBooks[0]
  expect(shallow(<Book onChangeShelf={onChangeShelf} book={book} />)).toMatchSnapshot()
})