import React from 'react'
import { shallow } from 'enzyme'

import BookCover from './BookCover'

it('Renders BookCover without crashing', () => {
  expect(shallow(<BookCover image="" />)).toMatchSnapshot()
})