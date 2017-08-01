const ModelBase = require('./ModelBase');
const DietaryRestriction = require('./DietaryRestriction');
const GuestDietaryRestriction = require('./GuestDietaryRestriction');

const Guest = ModelBase.extend({
  idAttribute: 'id',

  tableName: 'guests',

  dietaryRestrictions() {
    return this.belongsToMany(DietaryRestriction).through(GuestDietaryRestriction);
  },

});

module.exports = Guest;
