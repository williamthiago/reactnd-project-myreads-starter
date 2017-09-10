import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'

import * as BooksAPI from './BooksAPI'
import Search from './components/Search'
import Library from './components/Library'

class App extends Component {
  state = {
    myBooks: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true })

    const myBooks = await BooksAPI.getAll()

    this.setState({ myBooks, loading: false })
  }

  async addBookToShelf(book, shelf) {
    let { myBooks } = this.state
    let myBook = myBooks.find(myBook => myBook.id === book.id);

    let bookToUpdate = myBook || book
    bookToUpdate.shelf = shelf

    if (!myBook) {
      myBooks = myBooks.concat(bookToUpdate)
    }

    this.setState({
      myBooks
    })

    await BooksAPI.update(bookToUpdate, shelf)
  }

  render() {
    const { myBooks, loading } = this.state
    return (
      <div className="app">
        <Switch>
            <Route exact path="/" render={() => (
              <Library books={myBooks} loading={loading} onChangeShelf={this.addBookToShelf.bind(this)} />
            )} />
            <Route path="/search" render={() => (
              <Search books={myBooks} onChangeShelf={this.addBookToShelf.bind(this)} />
            )} />
        </Switch>
      </div>
    )
  }
}

export default App
