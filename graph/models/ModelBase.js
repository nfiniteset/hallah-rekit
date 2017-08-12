const db = require('../db');
const bookshelf = require('bookshelf')(db);
const ModelBase = require('bookshelf-modelbase')(bookshelf);

bookshelf.plugin('registry');

module.exports = ModelBase;
module.exports.bookshelf = bookshelf;
