import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Debounce } from 'react-throttle';

import * as BooksAPI from '../BooksAPI'
import Books from './Books'

class Search extends Component {
  state = {
    result: [],
    loading: false,
    query: ''
  }

  async handleSearch(query) {
    this.setState({ query })

    if (!query) {
      return
    }

    this.setState({ loading: true });

    let result = await BooksAPI.search(query).then(this.parseSearch.bind(this))

    this.setState({ result, loading: false })
  }

  parseSearch(result) {
    result = (result instanceof Array) ? result : []
    const { books } = this.props

    return result.map(resultBook => {
      let bookInMyBooks = books.find(book => book.id === resultBook.id)
      return {
        ...resultBook,
        shelf: bookInMyBooks ? bookInMyBooks.shelf : 'none'
      }
    })
  }

  render() {
    const { result: books, query, loading } = this.state

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
          {loading && 
            <p>Loading...</p>
          }
          {!loading && query.length > 0 && books.length === 0 && 
            <p>No books found for '{query}'.</p>
          }
          {!loading && books.length > 0 && 
            <Books books={books} />
          }
        </div>
      </div>
    )
  }
}

export default Search
