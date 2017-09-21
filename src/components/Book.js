import React, { Component } from 'react'

import { BookPropType } from '../validations/props'
import shelfType from '../enums/shelfType'
import BookCover from './BookCover'
import noCover from '../icons/no-cover.png'

class Book extends Component {
  state = {
    selectingTag: false
  }

  toogleSelectTag() {
    this.setState((prev) => {
      return {
        selectingTag: !prev.selectingTag
      }
    })
  }

  onChange(shelf) {
    this.props.onChangeShelf && this.props.onChangeShelf(this.props.book, shelf)
    this.setState({
      selectingTag: false
    })
  }

  render() {
    let { selectingTag } = this.state
    let { authors, title, shelf = 'none', imageLinks } = this.props.book
    authors = authors ? authors.join('; ') : 'Author Unknow'
    let backgroundImage = imageLinks && imageLinks.thumbnail ? imageLinks.thumbnail : noCover

    let {[shelf]: ignoreType, ...possibleShelfTypes} = shelfType 

    return (
      <div className="book">
        <div className="book-top">
          <BookCover image={backgroundImage} />
          <div className={'book-tag ' + shelfType[shelf].className} onClick={this.toogleSelectTag.bind(this)}>
            <span className="book-tag-label">{shelfType[shelf].text}</span>
            <span className="book-options-toggle">…</span>
          </div>
          {selectingTag && (
            <div className="book-options">
              {Object.keys(possibleShelfTypes).map(shelfTypeKey => {
                let shelfType = possibleShelfTypes[shelfTypeKey]
                return (
                  <span 
                    key={shelfTypeKey}
                    onClick={this.onChange.bind(this, shelfTypeKey)}
                    className={ 'tag ' + shelfType.className }>
                      {shelfType.alternativeText || shelfType.text}
                  </span>
                )
              })}
            </div>
          )}
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    )
  }
}

Book.propTypes = BookPropType

export default Book