const db = require('../db');
const bookshelf = require('bookshelf')(db);
const Guest = require('./Guest');
const GuestsDietaryRestrictions = require('./GuestsDietaryRestrictions');

const DietaryRestrictions = bookshelf.Model.extend({
  idAttribute: 'id',
  tableName: 'dietary_restrictions',
  guests: () => this.belongsToMany(Guest).through(GuestsDietaryRestrictions)
});

module.exports = DietaryRestrictions;
