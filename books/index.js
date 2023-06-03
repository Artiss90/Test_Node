const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

const booksPath = path.join(__dirname, 'books.json');

const getAll = async () => {
  const data = await fs.readFile(booksPath);
  return JSON.parse(data);
};

const getById = async id => {
  const books = await getAll();
  return books.find(book => book.id === id);
};

module.exports = { getAll, getById };
