import React, { Component } from 'react'
import { BookCoverPropType } from '../validations/props'

const detectImageSize = (imageURL, maxHeight) => new Promise(resolve => {
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

class BookCover extends Component {
  state = {
    image: '',
    width: 0,
    height: 0
  }

  async componentDidMount() {
    const maxHeight = 200
    let { image } = this.props
    let size = await detectImageSize(image, maxHeight)
    this.setState({
      ...size,
      image
    })
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