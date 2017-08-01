const ModelBase = require('./ModelBase');

const GuestDietaryRestriction = ModelBase.extend({
  idAttribute: 'id',
  tableName: 'guest_dietary_restrictions'
});

module.exports = GuestDietaryRestriction;
