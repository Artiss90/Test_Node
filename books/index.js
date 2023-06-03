const fs = require('fs/promises');
const path = require('path');
//! must have: "nanoid": "3.3.4", because 4.0.0 doesn`t work with commonJS, only ES6
const { nanoid } = require('nanoid');

const booksPath = path.join(__dirname, 'books.json');

const getAll = async () => {
  const data = await fs.readFile(booksPath);
  return JSON.parse(data);
};

const getById = async id => {
  const books = await getAll();
  // undefine for Base(e.g.: Mongo) return null
  const foundBook = books.find(book => book.id === id) || null;
  if (!foundBook) {
    console.log('This book  wasn`t found');
    return null;
  }
  return foundBook;
};

const addBook = async ({ title, author }) => {
  const books = await getAll();
  if (!title || !author) {
    console.log('You need to specify the title and the author');
    return null;
  }
  const newBook = {
    id: nanoid(),
    title: title,
    author: author,
  };
  books.push(newBook);
  await fs.writeFile(booksPath, JSON.stringify(books, null, 2));
  return newBook;
};

const updateBookById = async ({ id, title, author }) => {
  if (!title || !author) {
    console.log(
      'You need to specify the title and the author witch you change',
    );
    return null;
  }

  const books = await getAll();
  const indexBook = books.findIndex(item => item.id === id);
  if (indexBook === -1) {
    console.log('This book wasn`t found');
    return null;
  }

  const updateBook = { ...books[indexBook], title, author };
  books[indexBook] = updateBook;
  await fs.writeFile(booksPath, JSON.stringify(books, null, 2));
  return updateBook;
};

const deleteById = async id => {
  let books = await getAll();
  const indexBook = books.findIndex(item => item.id === id);
  if (indexBook === -1) {
    console.log('This book wasn`t found');
    return null;
  }

  books = books.filter(item => item.id !== id);
  await fs.writeFile(booksPath, JSON.stringify(books, null, 2));
  return 'book was deleted';
};

module.exports = { getAll, getById, addBook, updateBookById, deleteById };
