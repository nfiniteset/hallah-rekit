const ModelBase = require('./ModelBase');
const Guest = require('./Guest');

const Dinner = ModelBase.extend({
  idAttribute: 'id',

  tableName: 'dinners',

  guests() {
    return this.belongsToMany(Guest);
  },

});

module.exports = Dinner;
