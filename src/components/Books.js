import React from 'react'

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

export default Books