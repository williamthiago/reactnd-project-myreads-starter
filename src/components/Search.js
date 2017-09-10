import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Books from './Books'

class Search extends Component {
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <Books books={[]} />
        </div>
      </div>
    )
  }
}

export default Search
