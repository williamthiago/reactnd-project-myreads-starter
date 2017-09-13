import React from 'react'
import PropTypes from 'prop-types'

import bookPropType from './bookPropType'
import shelfType from '../enums/shelfType'
import BookCover from './BookCover'
import noCover from '../icons/no-cover.png'

const Book = ({ book, onChangeShelf }) => {
  let { authors, title, shelf, imageLinks } = book
  authors = authors ? authors.join('; ') : 'Author Unknow'
  
  let backgroundImage = imageLinks ? imageLinks.thumbnail : noCover

  const onChange = (event) => {
    let shelf = event.target.value
    onChangeShelf && onChangeShelf(book, shelf)
  } 
  
  return (
    <div className="book">
      <div className="book-top">
        <BookCover image={backgroundImage} />
        <div className="book-shelf-changer">
          <select defaultValue={shelf} onChange={onChange} >
            <option value="none" disabled>Move to...</option>
            {Object.keys(shelfType).map(type => (
              <option key={type} value={type}>{shelfType[type]}</option>
            ))}
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  )
}

Book.propTypes = {
  book: bookPropType.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default Book