import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import Search from './components/Search'
import Library from './components/Library'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
            <Route exact path="/" component={Library} />
            <Route path="/search" component={Search} />
        </Switch>
      </div>
    )
  }
}

export default App
