const Dinner = require('../models/Dinner');
const Invitation = require('../models/Invitation');

async function update({ input }) {
  const invitation = await Invitation.findById(input.id, { withRelated: ['dinner'] });
  await invitation.set({ state: input.state }).save();
  const dinner = invitation.related('dinner');

  await dinner.refresh({ withRelated: 'invitations' });
  return dinner.serialize();
}

module.exports = root => Object.assign(root, {
  updateInvitation: update
});
