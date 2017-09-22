# Udacity MyReads [![Build Status](https://travis-ci.org/williamthiago/udacity-myreads.svg?branch=master)](https://travis-ci.org/williamthiago/udacity-myreads)

This project is an implementation for the final assessment project for Udacity's React Fundamentals course.

It has a backend server to store books and shelves provided by Udacity [reactnd-project-myreads-starter](https://github.com/udacity/reactnd-project-myreads-starter).

## TL;DR

- Try out the MyReads example running in https://williamthiago.github.io/udacity-myreads/ 

or...

- Clone the project, and use the following steps:

  * Install all project dependencies with `npm install`
  * Start the development server with `npm start`

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md).

## Requirements

The requirements for this assessment are listed on [MyReads: Project Specifications](https://review.udacity.com/#!/rubrics/918/view):

#### Application Setup

- [x] Is the application easy to install and start?
- [x] Does the application include README with clear installation and launch instructions?

#### Main Page

- [x] Does the main page show three categories (or “bookshelves”) for books (currently reading, want to read, and read)?
- [x] Does the main page allow users to move books between shelves?
- [x] Does information persist between page refreshes?

#### Search Page

- [x] Does the search page have a search input that lets users search for books?
- [x] Do the search results allow a user to categorize a book as “currently reading”, “want to read”, or “read”?
- [x] Do selections made on the search page show up on the main page?

#### Routing

- [x] Does the main page link to the search page?
- [x] Does the search page link back to the main page?

#### Code Functionality

- [x] Does the project code handle state management appropriately?
- [x] Is JSX formatted properly?

## Extras

The following requirements were not required, but were added to the project:

- [x] Continuous Integration using Travis
- [x] Continuous Delivery to Github Pages
- [x] PropTypes
- [x] Image size detection
- [x] No-image replacement
- [x] Code linter
- [x] Toast notifications
- [x] Tests (partly)
- [x] Empty states
- [x] Loading
- [x] Content Placeholder (shimmed effect)
- [x] Style improvements (tag, tag selector)