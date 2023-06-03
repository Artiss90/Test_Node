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

    // example: invokeAction({ action: 'addBook', title: 'How it work?', author: 'Artiss90'});
    case 'addBook':
      const newBook = await books.addBook({ title, author });
      console.log(newBook);
      return;

    // example: invokeAction({action: 'updateById',id: '93__ryuwq_8biHe0UkQvB',title: 'How work Node.js?',author: 'Artiss90',});
    case 'updateById':
      const updateBook = await books.updateBookById({ id, title, author });
      console.log(updateBook);
      return;

    // example: invokeAction({ action: 'deleteById', id: '93__ryuwq_8biHe0UkQvB' });
    case 'deleteById':
      const deletedBook = await books.deleteById(id);
      console.log(deletedBook);
      return;

    default:
      return console.log('Unknown action');
  }
};

//? test command:
// invokeAction({ action: 'read' });

// invokeAction({ action: 'getById', id: 'dkJSszfrRVtLVR_MfRqcu' });

// invokeAction({ action: 'addBook', title: 'How it work?', author: 'Artiss90' });

// invokeAction({
//   action: 'updateById',
//   id: '93__ryuwq_8biHe0UkQvB',
//   title: 'How work Node.js?',
//   author: 'Artiss90',
// });

// invokeAction({ action: 'deleteById', id: '93__ryuwq_8biHe0UkQvB' });
