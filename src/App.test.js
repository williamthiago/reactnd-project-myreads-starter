import React from 'react'
import { shallow } from 'enzyme'

import App from './App'

it('Renders App without crashing', () => {
  expect(shallow(<App />)).toMatchSnapshot()
})