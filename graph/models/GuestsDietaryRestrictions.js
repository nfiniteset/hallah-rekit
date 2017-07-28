const db = require('../db');
const bookshelf = require('bookshelf')(db);

const GuestsDietaryRestrictions = bookshelf.Model.extend({
  idAttribute: 'id',
  tableName: 'guests_dietary_restrictions'
});

module.exports = GuestsDietaryRestrictions;
