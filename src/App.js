import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Snackbar from 'react-md/lib/Snackbars'
import ReactLoading from 'react-loading'

import './App.css'

import * as BooksAPI from './BooksAPI'
import Search from './components/Search'
import Library from './components/Library'

class App extends Component {
  state = {
    myBooks: [],
    loading: false,
    processing: false,
    toasts: []
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const myBooks = await BooksAPI.getAll()
    this.setState({ myBooks, loading: false })
  }

  addToast = (text, action, autohide = true) => {
    this.setState((state) => {
      const toasts = state.toasts.slice()
      toasts.push({ text, action })
      return { toasts, autohide }
    });
  }

  dismissToast = () => {
    const [, ...toasts] = this.state.toasts
    this.setState({ toasts })
  };

  throwSyncError() {
    var newErr = new Error('Problems! Check your network, please')

    return err => { 
      newErr.originalError = err
      this.addToast(newErr.message)
      this.setState({
        processing: false
      })
      throw newErr
    }
  }

  async addBookToShelf(book, shelf) {
    this.setState({ processing: true })
    await BooksAPI.update(book, shelf).catch(this.throwSyncError())
  
    book.shelf = shelf
    this.setState(prevState => ({
        myBooks: prevState.myBooks.filter(myBook => myBook.id !== book.id).concat(book),
        processing: false
    }))
  
    this.addToast('Book updated!')
  }

  render() {
    const { myBooks, loading, toasts, processing } = this.state
    return (
      <div className="app">
        <Switch>
            <Route exact path="/" render={() => (
              <Library 
                books={myBooks} 
                loading={loading} 
                onChangeShelf={this.addBookToShelf.bind(this)} />
            )} />
            <Route path="/search" render={() => (
              <Search 
                processing={processing}
                books={myBooks} 
                onChangeShelf={this.addBookToShelf.bind(this)} />
            )} />
        </Switch>
        <Snackbar
          toasts={toasts}
          autohide={true}
          onDismiss={this.dismissToast}
        />
        {(processing || loading) && 
          <div className="loading-overlay">
            <ReactLoading className="loading-element" type="bubbles" color="#746994" delay={0} />
          </div>
        }
      </div>
    )
  }
}

export default App
