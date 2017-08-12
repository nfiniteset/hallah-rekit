const Dinner = require('../models/Dinner');
const Invitation = require('../models/Invitation');

async function update({ input }) {
  const invitation = await Invitation.findById(input.id, { includeRelated: ['dinner'] });
  await invitation.set({ state: input.state }).save();
  const dinner = await Dinner.findById(invitation.attributes.dinner_id, { includeRelated: ['invitations '] });
  return dinner.serialize();
}

module.exports = root => Object.assign(root, {
  updateInvitation: update
});
