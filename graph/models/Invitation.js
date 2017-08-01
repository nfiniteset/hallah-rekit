const ModelBase = require('./ModelBase');

const Invitation = ModelBase.extend({
  idAttribute: 'id',
  tableName: 'invitations'
});

module.exports = Invitation;
