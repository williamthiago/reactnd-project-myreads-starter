import PropTypes from 'prop-types'
import shelfType from '../enums/shelfType'

const bookPropType = PropTypes.shape({
  authors: PropTypes.arrayOf(PropTypes.string), 
  title: PropTypes.string.isRequired,
  shelf: PropTypes.oneOf([...Object.keys(shelfType), 'none']),
  imageLinks: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired
  })
})

export const BookPropType = {
  book: bookPropType.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export const BookCoverPropType = {
  image: PropTypes.string.isRequired
}

export const BooksPropType = {
  books: PropTypes.arrayOf(bookPropType).isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export const LibraryPropType = {
  books: PropTypes.arrayOf(bookPropType).isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  loading: PropTypes.bool
}

export const SearchPropType = {
  books: PropTypes.arrayOf(bookPropType).isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export const ShelfPropType = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(bookPropType).isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export const BookPlaceholdersPropType = {
  showTitle: PropTypes.bool
}