import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'

import * as BooksAPI from './BooksAPI'
import Search from './components/Search'
import Library from './components/Library'

class App extends Component {
  state = {
    myBooks: []
  }

  async componentDidMount() {
    const myBooks = await BooksAPI.getAll()
    this.setState({ myBooks })
  }

  render() {
    const { myBooks } = this.state
    return (
      <div className="app">
        <Switch>
            <Route exact path="/" render={() => (
              <Library books={myBooks} />
            )} />
            <Route path="/search" render={() => (
              <Search books={myBooks} />
            )} />
        </Switch>
      </div>
    )
  }
}

export default App
