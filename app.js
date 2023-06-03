const { program } = require('commander');

const books = require('./books');
const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    // example: invokeAction({ action: 'read' });
    case 'read':
      const allBooks = await books.getAll();
      console.log(allBooks);
      return;

    // example: invokeAction({ action: 'getById', id: 'dkJSszfrRVtLVR_MfRqcu' });
    case 'getById':
      const bookById = await books.getById(id);
      console.log(bookById);
      return;

    default:
      return console.log('Unknown action');
  }
};

//? test command:
// invokeAction({ action: 'read' });
// invokeAction({ action: 'getById', id: 'dkJSszfrRVtLVR_MfRqcu' });
