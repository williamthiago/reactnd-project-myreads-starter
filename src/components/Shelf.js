import React from 'react'

import { ShelfPropType } from '../validations/props'
import Books from './Books'
import noBooks from '../icons/no-books.png'

const Shelf = ({title, books, onChangeShelf}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      {books.length === 0 && (
        <div className="bookshelf-empty">
          <img src={noBooks} alt="" />
          <p>Oops... There are no books!</p>
        </div>
      )}
      {books.length > 0 && (
        <Books books={books} onChangeShelf={onChangeShelf} />
      )}
    </div>
  </div>
)

Shelf.PropTypes = ShelfPropType

export default Shelf