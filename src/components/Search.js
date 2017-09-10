import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import * as BooksAPI from '../BooksAPI'
import Books from './Books'

class Search extends Component {
  state = {
    query: '',
    result: []
  }

  async handleSearch(query) {
    query = query.trim()
    this.setState({ query })
    
    if (!query) {
      return
    }
    
    let result = await BooksAPI.search(query, 10)

    this.setState({ result })
  }

  render() {
    const { query, result: books } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.handleSearch(event.target.value)}
            />
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
