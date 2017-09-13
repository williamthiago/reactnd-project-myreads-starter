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

export default bookPropType