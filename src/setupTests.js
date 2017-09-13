global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
}

global.sampleBooks = [
  {
    "title": "The Cuckoo's Calling",
    "authors": [
      "Robert Galbraith"
    ],
    "imageLinks": {
      "thumbnail": "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "id": "afhdksa4343fds",
    "shelf": "wantToRead"
  },{
    "title": "Lords of Finance",
    "authors": [
      "Liaquat Ahamed"
    ],
    "imageLinks": {
      "thumbnail": "http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "id": "74XNzF_al3MC",
    "shelf": "wantToRead"
  },
  {
    "title": "Lords of Finance",
    
  }
]