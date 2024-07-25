const MONGOOSE = require('mongoose');

const STRING = MONGOOSE.Schema.Types.String;
const DATE = MONGOOSE.Schema.Types.Date;
const NUMBER = MONGOOSE.Schema.Types.Number;

const BOOK_SCHEMA = MONGOOSE.Schema({
    title: { type: STRING, required: true },
    author: { type: STRING, required: true },
    description: { type: STRING, required: true },
    price: { type: NUMBER, required: true },
    creationDate: { type: DATE, default: Date.now },
});

BOOK_SCHEMA.index({
    title: 'text',
    author: 'text'
});

const BOOK = MONGOOSE.model('Book', BOOK_SCHEMA);

module.exports = BOOK;
