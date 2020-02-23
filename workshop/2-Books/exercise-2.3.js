// From 2.1. and 2.2
// Copy over your solutions classes you created in 2.1 and 2.2

// Exercise 2.3
// We need a method in our BookList to make adding books possible.
//  - create an add method to add books to the library.
//      - when you add a book, it should increase the read, or unread count.
//  - use the add method to add in a few books.
//      - you can call new Book without declaring it as variable.
//      - e.g. homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));

// Once you have added a few books, console.log(homeLibrary) to see if all is well.
class Book {
  constructor(t, g, a, r, rd, ed) {
    this.title = t;
    this.genre = g;
    this.author = a;
    this.read = r;
    this.startReadDate = rd;
    this.endReadDate = ed;
  }
}

class BookList {
  constructor() {
    this.booksRead = 0;
    this.bookUnread = 0;
    this.books = [];
    this.lastBook = null;
    this.bookCurrently = null;
    this.upNext = null;
  }
}

add = book => {
  this.books.push(book);
  if (books.booksRead) {
    this.booksRead += 1;
  } else {
    this.booksUnread -= 1;
  }
};

let homeLibrary = new BookList(0, 0, ["1", "2", "3", "4"], false, null, null);

console.log(homeLibrary);
