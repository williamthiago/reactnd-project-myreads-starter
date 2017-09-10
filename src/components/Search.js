import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Debounce } from 'react-throttle';

import * as BooksAPI from '../BooksAPI'
import Books from './Books'

class Search extends Component {
  state = {
    result: []
  }

  async handleSearch(query) {
    if (!query) {
      return
    }

    let result = await BooksAPI.search(query, 10)

    this.setState({ result })
  }

  render() {
    const { result: books } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <Debounce time="300" handler="onChange">
              <input 
                type="text" 
                placeholder="Search by title or author"
                onChange={(event) => this.handleSearch(event.target.value)}
              />
            </Debounce>
          </div>
        </div>
        <div className="search-books-results">
          <Books books={books} />
        </div>
      </div>
    )
  }
}

export default Search
