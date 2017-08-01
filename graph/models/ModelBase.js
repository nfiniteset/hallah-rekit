const db = require('../db');
const bookshelf = require('bookshelf')(db);
const ModelBase = require('bookshelf-modelbase')(bookshelf);

module.exports = ModelBase;
