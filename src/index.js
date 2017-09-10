import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import BookApp from './App'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <BookApp />
  </BrowserRouter>, 
  document.getElementById('root'))
