const ModelBase = require('./ModelBase');
const Guest = require('./Guest');
const GuestDietaryRestriction = require('./GuestDietaryRestriction');

const DietaryRestrictions = ModelBase.extend({
  idAttribute: 'id',
  tableName: 'dietary_restrictions',
  guests: () => this.belongsToMany(Guest).through(GuestDietaryRestriction),
  serialize() {
    return this.attributes.label;
  }
});

module.exports = DietaryRestrictions;
