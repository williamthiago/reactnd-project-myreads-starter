import React from 'react'
import { shallow, mount, render } from 'enzyme'

import noCover from '../icons/no-cover.png'
import Book from './Book'

it('Renders Book without crashing', () => {
  const onChangeShelf = () => {}
  const book = sampleBooks[0]

  const bookElement = shallow(<Book book={book} onChangeShelf={onChangeShelf} />)
  
  expect(bookElement).toMatchSnapshot()
})

it('Should render authors with names separated by semicolons', () => {
  const onChangeShelf = () => {}
  const authors = ["Name 1", "Name 2", "Name 3"]
  const book = {...sampleBooks[0], authors }

  const bookElement = mount(<Book book={book} onChangeShelf={onChangeShelf} />)

  expect(bookElement.find('.book-authors').text()).toBe(authors.join("; "))
})


it('Should render author unknows', () => {
  const onChangeShelf = () => {}
  const authors = null
  const book = {...sampleBooks[0], authors }

  const bookElement = mount(<Book book={book} onChangeShelf={onChangeShelf} />)

  expect(bookElement.find('.book-authors').text()).toBe("Author Unknow")
})

it('Should render the correct title', () => {
  const onChangeShelf = () => {}
  const title = "Title 1"
  const book = {...sampleBooks[0], title }

  const bookElement = mount(<Book book={book} onChangeShelf={onChangeShelf} />)

  expect(bookElement.find('.book-title').text()).toBe(title)
})

it('Should render the correct shelf', () => {
  const onChangeShelf = () => {}
  const shelf = "currentlyReading"
  const book = {...sampleBooks[0], shelf }

  const bookElement = render(<Book book={book} onChangeShelf={onChangeShelf} />)

  expect(bookElement.find('select').val()).toBe(shelf)
})

it('Should render no-cover image if book has no cover', () => {
  const onChangeShelf = () => {}
  const imageLinks = null
  const book = {...sampleBooks[0], imageLinks }

  const bookElement = mount(<Book book={book} onChangeShelf={onChangeShelf} />)
  // expect().toBe(shelf)
})

it('Should emit changes when new shelf is selected', () => {
  const onChangeShelf = jest.fn()
  const book = sampleBooks[0]
  const bookElement = mount(<Book book={book} onChangeShelf={onChangeShelf} />)

  bookElement.find('select').simulate('change')

  expect(onChangeShelf).toHaveBeenCalledTimes(1)
})