const USER_CONTROLLER = require('../controllers/user');
const BOOK_CONTROLLER = require('../controllers/book');
const ERROR_CONTROLLER = require('../controllers/error');
const AUTH = require('./auth');

module.exports = (APP) => {
    APP.post('/user/register', USER_CONTROLLER.register);
    APP.post('/user/login', USER_CONTROLLER.login);
    APP.get('/book/search',AUTH.isAuth, BOOK_CONTROLLER.search);
    APP.get('/book/details/:bookId',AUTH.isAuth,  BOOK_CONTROLLER.getSingle);
    APP.post('/book/add', AUTH.isAuth, BOOK_CONTROLLER.add);
    APP.put('/book/edit/:bookId',AUTH.isAuth, BOOK_CONTROLLER.edit);
    APP.delete('/book/delete/:bookId',AUTH.isAuth, BOOK_CONTROLLER.delete);



    APP.all('*', ERROR_CONTROLLER.error);
};
