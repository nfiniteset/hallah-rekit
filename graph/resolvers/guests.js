const Guest = require('../models/Guest');

function listGuests() {
  return Guest.fetchAll().then((guests) => {
    console.log(guests);
    return guests.map(guest => Object.assign({ name: 'Unknown', dietaryRestrictions: [] }, guest.attributes));
  });
}

function createGuest(vars) {
  return new Guest(vars.input)
    .save()
    .then(guest => Object.assign(guest.attributes, {
      dietaryRestrictions: []
    }));
}

module.exports = root => Object.assign(root, {
  guests: listGuests,
  createGuest
});
