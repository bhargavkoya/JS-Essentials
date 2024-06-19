const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(2);

//destructuring objects
const { title, author, genres, pages, publicationDate } = book;
console.log(title, author);

//destructuring arrays and rest operator
const [first, second, ...others] = genres;

console.log(first, second, others);

//spread operator
const newGenre = ["epic fantasy", ...genres];
newGenre;

const updatedBook = {
  ...book,
  //adding new property
  moviePubliecationDate: "2021/03/03",
  //updating existing property value
  pages: 200,
};
updatedBook;

//template literals
const summary = `${title}, a ${pages} pages long book, written by ${author} and published in ${publicationDate}`;
summary;

//arrow functions
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

//logical operators - short circuting
console.log(true && "some string");
console.log(false && "some string"); // short circuit happened

//falsy values 0,'',null, undefined
console.log(0 && "some string");
console.log(undefined && "some string");

console.log(true || "some string"); //short circuit happened
console.log(false || "some string");

console.log(book.translations.spanish);
console.log(book.translations.spanish || "not defined");

//non coalenscense operator
const nonco = book.reviews.librarything.reviewsCount ?? "Not defined or null";
nonco;

//arrays
const books = getBooks();
books;

//array map
const x = [1, 2, 3, 4, 5].map((e) => e * 2);
x;

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));
essentialData;

//array filter
const longBooksWithMovies = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovies;

const adventures = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => ({ title: book.title, geners: book.genres }));

adventures;

//array reduce
const totalPages = books.reduce((acc, book) => acc + book.pages, 0);
totalPages;

//array sort
const arr = [3, 7, 5, 4, 9];
const assendSorted = arr.sort((a, b) => a - b);
assendSorted;
const descndSorted = arr.sort((a, b) => b - a);
descndSorted;
arr;

//without modifying original we can use slice method and then apply sort
const sorted = arr.slice().sort((a, b) => a - b);
sorted;
arr;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

//immutable arrays
const newBook = { id: 6, title: "new book title", author: "new book author" };
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

const booksAfterRemoval = booksAfterAdd.filter((book) => book.id !== 6);
booksAfterRemoval;

const booksAfterUpdate = books.map((book) =>
  book.id == 1 ? { ...books, pages: 1 } : book
);
booksAfterUpdate;

//asynchronous promises
//fetch("https://jsonplaceholder.typicode.com/todos/3")
// .then((response) => response.json())
//.then((json) => console.log(json));

//asynchronous using async and await keywords
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = res.json();
  console.log(data);
  return data;
}

const todosdata = getTodos();
todosdata;
