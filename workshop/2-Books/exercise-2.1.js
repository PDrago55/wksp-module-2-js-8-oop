// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//      - title, genre, author, read, startReadDate, endReadDate
// Declare the books as book1, book2, book3, book4, book5
//
// Remember that it isn't necessary to pass arguments for all of the parameters.
// if you haven't read the book, there should not be a startReadDate or endReadDate
//
// Console.log them to verify that all is working.

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

let book1 = new Book(
  "Harry Potter",
  "Fantasy",
  "J.K. Rowling",
  "Read",
  "03 / 10 / 10"
);
let book2 = new Book(
  "Game of Thrones",
  "Fantasy",
  "George R.R. Martin",
  "Read",
  "10 / 12 / 17",
  "29 / 12 / 17"
);
let book3 = new Book(
  "Stats",
  "Education",
  "Dr. John Doe",
  "Read",
  " 11 / 01 / 18",
  "31 / 01 / 18"
);
let book4 = new Book(
  "Political Psychology",
  "Education",
  "Dr. Leone Huddy",
  "Reading",
  "06 / 06 / 19",
  undefined
);
let book5 = new Book(
  "Data Science: Machine Learning",
  "Education",
  "Dr. John D. Kelleher",
  "Reading",
  "10 / 09 / 19",
  undefined
);

console.log(book1, book2, book3, book4, book5);
