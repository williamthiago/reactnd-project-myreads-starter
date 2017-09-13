import React from 'react'
import { shallow } from 'enzyme'

import Shelf from './Shelf'

it('Renders Shelf without books', () => {
  const books = []
  const onChangeShelf = () => {}
  expect(shallow(<Shelf books={books} title="Shelf Test" onChangeShelf={onChangeShelf} />)).toMatchSnapshot()
})