import React from 'react'
import { Link } from 'react-router-dom'

import Shelf from './Shelf'
import shelfType from '../enums/shelfType'

const Library = ({ books, loading }) => {
  const shelves = Object.keys(shelfType).map(type => {
    let name = shelfType[type]
    let booksInShelf = books.filter(book => book.shelf === type)
    return { type, name, booksInShelf }
  })
  
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {loading && 
            <p>Loading...</p>
          }
          {!loading && shelves.map(shelf => (
            <Shelf key={shelf.type} title={shelf.name} books={shelf.booksInShelf} />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

export default Library
