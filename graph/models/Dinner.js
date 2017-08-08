const camelizeKeys = require('../utils/camelizeKeys');
const ModelBase = require('./ModelBase');
const Guest = require('./Guest');
const Invitation = require('./Invitation');

const Dinner = ModelBase.extend({
  idAttribute: 'id',

  tableName: 'dinners',

  guests() {
    return this
      .hasMany(Guest)
      .through(Invitation);
  },

  invitations() {
    return this.hasMany(Invitation);
  },

  serialize() {
    const attrs = Object.assign(this.attributes, {
      invitations: this.related('invitations').map(r => r.serialize())
    });

    return camelizeKeys(attrs);
  }

});

module.exports = Dinner;
