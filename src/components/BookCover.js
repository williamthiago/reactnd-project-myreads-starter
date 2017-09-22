import React, { Component } from 'react'
import { BookCoverPropType } from '../validations/props'

class BookCover extends Component {
  state = {
    image: '',
    width: 0,
    height: 0
  }

  detectImageSize = (imageURL, maxHeight) => new Promise(resolve => {
    const image = new Image()
  
    image.onload = () => {
      let { width, height } = image
  
      if (height > maxHeight) {
        width *= maxHeight / height
        height = maxHeight
      }
  
      resolve({ width, height })
    }
  
    image.src = imageURL
  })

  async componentDidMount() {
    this._isMounted = true

    const maxHeight = 200
    let { image } = this.props
    let size = await this.detectImageSize(image, maxHeight)
    
    this._isMounted && this.setState({
      ...size,
      image
    })
  }

  async componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    let { image, width, height } = this.state
    let backgroundSize = 'cover'
    let backgroundImage = `url(${image})`

    const coverStyle = {
      backgroundSize,
      backgroundImage,
      height,
      width,
    }

    return (
      <div className="book-cover" style={coverStyle}></div>
    )
  }
}

BookCover.propTypes = BookCoverPropType

export default BookCover