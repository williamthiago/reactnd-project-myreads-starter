import React from 'react'

import Book from './Book'

const Books = ({ books }) => (
  <ol className="books-grid">
    {books.map(book => (
      <li key={book.id}>
        <Book book={book} />
      </li>
    ))}
  </ol>
)

export default Books