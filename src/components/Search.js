import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Debounce } from 'react-throttle'
import ReactLoading from 'react-loading'

import { SearchPropType } from '../validations/props'
import * as BooksAPI from '../BooksAPI'
import Books from './Books'
import BookPlaceholders from './BookPlaceholders'

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

    this.setState({ loading: true })

    let result = await BooksAPI.search(query)

    this.setState({ result, loading: false })
  }

  parseSearchResult() {
    const { books } = this.props
    let { result = [] } = this.state

    return (result.items || result).map(resultBook => {
      let bookInMyBooks = books.find(book => book.id === resultBook.id)

      return {
        ...resultBook,
        shelf: bookInMyBooks ? bookInMyBooks.shelf : 'none'
      }
    })
  }

  render() {
    const { query, loading } = this.state
    const { onChangeShelf, processing } = this.props

    let books = this.parseSearchResult()

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <Debounce time="300" handler="onChange">
              <input 
                type="text"
                autoFocus 
                placeholder="Search by title or author"
                onChange={(event) => this.handleSearch(event.target.value)}
              />
            </Debounce>
          </div>
        </div>
        <div className="search-books-results">
          {loading && 
            <BookPlaceholders count={14} />
          }
          {!loading && query.length > 0 && books.length === 0 && 
            <p>No books found for '{query}'.</p>
          }
          {!loading && books.length > 0 &&
            <Books books={books} onChangeShelf={onChangeShelf} />
          }
          {(processing || loading) &&
            <div className="loading-overlay">
              <ReactLoading className="loading-element" type="bubbles" color="#746994" delay={0} />
            </div>
          }
        </div>
      </div>
    )
  }
}

Search.propTypes = SearchPropType

export default Search
