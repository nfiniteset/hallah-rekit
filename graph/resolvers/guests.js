const Guest = require('../models/Guest');
const DietaryRestriction = require('../models/DietaryRestriction');
const GuestDietaryRestriction = require('../models/GuestDietaryRestriction');

function listGuests() {
  return Guest.fetchAll({ withRelated: ['dietaryRestrictions'] }).then(guests => guests.serialize());
}

function createGuest({ input }) {
  return new Guest(input)
    .save()
    .then(guest => guest.serialize());
}

function fetchGuest(vars) {
  return new Guest(vars)
    .fetch({ withRelated: ['dietaryRestrictions'] })
    .then(guest => guest.serialize());
}

async function addDietaryRestriction(input) {
  const dietaryRestriction = await DietaryRestriction.findOrCreate({
    label: input.dietaryRestriction
  });

  await GuestDietaryRestriction.findOrCreate({
    guest_id: input.guestId,
    dietary_restriction_id: dietaryRestriction.attributes.id
  });

  return Guest.findById(input.guestId, {
    withRelated: 'dietaryRestrictions'
  }).then(guest => guest.serialize());
}

module.exports = root => Object.assign(root, {
  guests: listGuests,
  guest: fetchGuest,
  createGuest,
  addDietaryRestriction
});
