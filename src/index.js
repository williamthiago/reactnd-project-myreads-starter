import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'react-md/dist/react-md.blue_grey-blue.min.css'

import BookApp from './App'
import './index.css'

const baseName = process.env.NODE_ENV === 'development' ? '/' : '/udacity-myreads' 

ReactDOM.render(
  <BrowserRouter basename={baseName}>
    <BookApp />
  </BrowserRouter>, 
  document.getElementById('root'))
