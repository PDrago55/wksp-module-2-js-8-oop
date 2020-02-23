// Exercise 2.2
// ------------
// Create a BookList class that has the following properties:
//      - booksread (0 to start)
//      - bookUnread (0 start)
//      - books (empty array)
//      - reference to last book read (null for now)
//      - reference to book currently reading (null for now)
//      - reference to book that is upNext (null for now)
//
// Then intantiate it once as 'homeLibrary'

// Console.log(homeLibrary) to verify that all is working.

class BookList {
  constructor(booksRead, bookUnread, books, lastBook, bookCurrently, upNext) {
    this.booksRead = booksRead;
    this.bookUnread = bookUnread;
    this.books = books;
    this.lastBook = lastBook;
    this.bookCurrently = bookCurrently;
    this.upNext = upNext;
  }
}

let homeLibrary = new BookList(0, 0, [], null, null, null);

console.log(homeLibrary);
