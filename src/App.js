import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import Search from './components/Search'
import Library from './components/Library'

class App extends Component {
  render() {
    return (
      <div className="app">
        {false ? (
          <Search />
        ) : (
          <Library />
        )}
      </div>
    )
  }
}

export default App
