const db = require('../db');
const bookshelf = require('bookshelf')(db);
const DietaryRestrictions = require('./DietaryRestrictions');
const GuestsDietaryRestrictions = require('./GuestsDietaryRestrictions');

const Guest = bookshelf.Model.extend({
  idAttribute: 'id',

  tableName: 'guests',

  dietaryRestrictions() {
    this.belongsToMany(DietaryRestrictions).through(GuestsDietaryRestrictions);
  },

  serialize() {
    return Object.assign({}, this.attributes, { dietaryRestrictions: [] });
  }

});

module.exports = Guest;
