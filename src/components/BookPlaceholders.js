import React from 'react'
import { BookPlaceholdersPropType } from '../validations/props'

const BookPlaceholders = ({showTitle = false, count = 5}) => (
  <div>
    {showTitle &&
      <div className="shimmer shimmer-title" />
    }
    <div className="shimmer-books">
      {[...Array(count)].map((index, item) => (
        <div className="shimmer-book" key={item}>
          <div className="shimmer shimmer-cover" />
          <div className="shimmer shimmer-text" />
        </div>
      ))}
    </div>
  </div>
)

BookPlaceholders.PropTypes = BookPlaceholdersPropType

export default BookPlaceholders