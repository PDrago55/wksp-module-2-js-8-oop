// From 2.3
// Copy over all of the code from 2.3...

// Exercise 2.4
// We need methods in our BookList start reading and finish reading books
//      - startReading accepts a title parameter. (The book should already be in your books array.
//          - set currentlyReading
//          - set the startReadDate in the book object to new Date(Date now());
//      - finishREading accepts a title parameter.
//          - set lastRead to title
//          - update the book's object accordingly.
//          - update the read and unread count accordingly.

// console.log(homeLibrary) when you're done adding, starting and finishing books.
// Make sure that your changes are reflected in the homeLibrary.
class Book {
  constructor(title, genre, author, read, startReadDate, endReadDate) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = read || false;
    this.startReadDate = startReadDate || null;
    this.endReadDate = endReadDate || null;
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

startReading = title => {
  this.bookCurrently = title;
  const book = this.books.find(book => book.title === title);
  book.startReadDate = new Date(Date.now());
};

finishReading = title => {
  this.lastBook = title;
  const book = this.books.find(book => book.title === title);
  book.endReadDate = new Date(Date.now());
  book.read = true;
  this.read += 1;
  this.unread -= 1;
};

const homeLibrary = new BookList();
homeLibrary.add(new Book("The Shining", "Horror", "Stephen King"));
homeLibrary.add(new Book("American Gods", "Fiction", "Neil Gaiman"));
homeLibrary.add(
  new Book("Eloquent JavaScript", "Programming", "Marijn Haverbeke")
);
homeLibrary.add(new Book("The Eire Affair", "Fantasy", "Jasper Fforde"));
homeLibrary.add(
  new Book("The Revisionists", "Science-fiction", "thomas Mullen")
);
