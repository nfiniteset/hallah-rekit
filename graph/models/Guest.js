const db = require('../db');
const bookshelf = require('bookshelf')(db);

const Guest = bookshelf.Model.extend({
  idAttribute: 'id',
  tableName: 'guests',
  serialize() {
    return Object.assign({}, this.attributes, { dietaryRestrictions: [] });
  }

});

module.exports = Guest;
