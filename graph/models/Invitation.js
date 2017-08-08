const camelizeKeys = require('../utils/camelizeKeys');
const ModelBase = require('./ModelBase');
const Dinner = require('./Dinner');
const Guest = require('./Guest');

const Invitation = ModelBase.extend({
  idAttribute: 'id',
  tableName: 'invitations',

  dinner() {
    return this.belongsTo(Dinner);
  },

  guest() {
    return this.belongsTo(Guest);
  },

  serialize() {
    return camelizeKeys(this.attributes);
  }
});

Invitation.states = [
  'INVITED',
  'ACCEPTED',
  'TENTATIVE',
  'DECLINED',
  'CONFIRMED',
  'CANCELED',
  'SHOWED',
  'NO-SHOWED'
];

Invitation.states.forEach((state) => {
  Invitation[state] = state;
});

module.exports = Invitation;
