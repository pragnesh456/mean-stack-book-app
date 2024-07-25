const MONGOOSE = require('mongoose');

MONGOOSE.Promise = global.Promise;

const {
    MONGO_HOST,
    MONGO_DATABASE,
    MONGO_PASSWORD,
    MONGO_PORT,
    MONGO_SRV,
    MONGO_USER,
} = require('./config').MONGO;

module.exports = (config) => {
    const URI = 'mongodb+srv://pragnesh511:76U7HNotbxfXvrYH@library.qrikxlr.mongodb.net/?retryWrites=true&w=majority&appName=library';
    MONGOOSE.connect(URI);

    let db = MONGOOSE.connection;

    db.once('open', (err) => {
        if (err) {
            throw err;
        }

        console.log(`MongoDB is ready! in HOST:[${MONGO_HOST}] database:[${MONGO_DATABASE}]`);
    });

    require('../models/User');
    require('../models/Role').init();
    require('../models/Book');
};
