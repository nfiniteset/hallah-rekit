const isFriday = require('date-fns/is_friday');
const isSaturday = require('date-fns/is_saturday');
const setDay = require('date-fns/set_day');
const Dinner = require('../models/Dinner');
const Invitation = require('../models/Invitation');

function followingFriday(dateOrNull) {
  const date = dateOrNull || Date.now();
  const friOrSat = isFriday(date) || isSaturday(date);
  return setDay(date, friOrSat ? 12 : 5);
}

async function createNextDinner() {
  const latestDinner = await Dinner.query().orderBy('starts_at', 'DESC').first();
  const nextDinner = await Dinner.create({
    starts_at: followingFriday(latestDinner ? latestDinner.starts_at : null)
  });
  return nextDinner.serialize();
}

function fetchDinners() {
  return Dinner.fetchAll({ withRelated: ['invitations'] }).then(dinners => dinners.serialize());
}

async function inviteGuest({ input }) {
  await Invitation.create({
    dinner_id: input.dinnerId,
    guest_id: input.guestId,
    state: Invitation.INVITED
  });

  const dinner = await Dinner.findById(input.dinnerId, {
    withRelated: ['invitations']
  });

  return dinner.serialize();
}

module.exports = root => Object.assign(root, {
  dinners: fetchDinners,
  createNextDinner,
  inviteGuest
});
