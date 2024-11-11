function averagePages(books) {
  const totalPages = books
    .map((book) => book.pages) 
    .reduce((total, pages) => total + pages, 0); 
  return books.length === 0 ? 0 : totalPages / books.length; 
}


const books = [
  { title: "Book One", author: "Author One", pages: 300 },
  { title: "Book Two", author: "Author Two", pages: 400 },
  { title: "Book Three", author: "Author Three", pages: 200 },
];
console.log(averagePages(books)); 
