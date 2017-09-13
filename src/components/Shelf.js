import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import bookPropType from './bookPropType'
import Books from './Books'

const Shelf = ({title, books, onChangeShelf}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      {books.length === 0 && (
        <div>
          <p>This bookshelf has no books yet!</p>
          <Link to="/search">Go search for more books!</Link>
        </div>
      )}
      {books.length > 0 && (
        <Books books={books} onChangeShelf={onChangeShelf} />
      )}
    </div>
  </div>
)

Shelf.PropTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(bookPropType).isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default Shelf