import React from 'react'

import shelfType from '../enums/shelfType'

const coverStyle = {
  width: 128,
  height: 178,
  backgroundSize: '128px 178px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center'
}

const Book = ({ book }) => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{
        ...coverStyle,
        backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})`
      }}></div>
      <div className="book-shelf-changer">
        <select defaultValue={book.shelf}>
          <option value="none" disabled>Move to...</option>
          {Object.keys(shelfType).map(type => (
            <option key={type} value={type}>{shelfType[type]}</option>
          ))}
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">{book.authors ? book.authors.join('; ') : 'Author unknow'}</div>
  </div>
)

export default Book