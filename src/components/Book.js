import React from 'react'

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
      <div className="book-cover" style={{...coverStyle,...{
        backgroundImage: `url(${book.imageLinks.thumbnail})`
      }}}></div>
      <div className="book-shelf-changer">
        <select>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">{book.authors.join('; ')}</div>
  </div>
)

export default Book