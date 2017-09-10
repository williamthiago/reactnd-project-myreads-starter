import React from 'react'

import shelfType from '../enums/shelfType'
import noCover from '../icons/no-cover.svg'

const coverStyleDefault = {
  width: 128,
  height: 178,
  backgroundSize: '128px 178px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center'
}

const Book = ({ book }) => {
  let { authors, title, shelf, imageLinks } = book;
  
  authors = authors ? authors.join('; ') : 'Author Unknow'
  
  let coverStyle = {
    ...coverStyleDefault,
    backgroundImage: `url(${imageLinks ? imageLinks.thumbnail : noCover})`
  }
  
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={coverStyle}></div>
        <div className="book-shelf-changer">
          <select defaultValue={shelf}>
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

export default Book