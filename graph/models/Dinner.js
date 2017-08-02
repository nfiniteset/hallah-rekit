const camelCase = require('lodash/fp/camelCase');
const snakeCase = require('lodash/fp/snakeCase');
const ModelBase = require('./ModelBase');
const Guest = require('./Guest');

const Dinner = ModelBase.extend({
  idAttribute: 'id',

  tableName: 'dinners',

  guests() {
    return this.belongsToMany(Guest);
  },

  serialize() {
    return Object.entries(this.attributes).reduce(
      (memo, [key, val]) => {
        let nextVal = val;
        switch (key) {
          case 'starts_at': {
            nextVal = val.toJSON();
            break;
          }
          default: {
            break;
          }
        }
        return Object.assign({}, memo, { [camelCase(key)]: nextVal });
      }, {}
    );
  }

});

module.exports = Dinner;
