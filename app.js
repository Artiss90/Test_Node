const { program } = require('commander');

const books = require('./books');
const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case 'read':
      const allBooks = await books.getAll();
      console.log(allBooks);
      return;

    default:
      return console.log('Unknown action');
  }
};

invokeAction({ action: 'read' });
