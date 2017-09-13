import React from 'react'
import PropTypes from 'prop-types'

import bookPropType from './bookPropType'
import Book from './Book'

const Books = ({ books, onChangeShelf }) => (
  <ol className="books-grid">
    {books.map(book => (
      <li key={book.id}>
        <Book book={book} onChangeShelf={onChangeShelf} />
      </li>
    ))}
  </ol>
)

Books.propTypes = {
  books: PropTypes.arrayOf(bookPropType).isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default Books