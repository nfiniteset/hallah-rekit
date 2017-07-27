const Guest = require('../models/Guest');

function listGuests() {
  return Guest.fetchAll().then((guests) => {
    console.log(guests);
    return guests.map(guest => Object.assign({ name: 'Unknown', dietaryRestrictions: [] }, guest.attributes));
  });
}

function createGuest({ input }) {
  return new Guest(input)
    .save()
    .then(guest => Object.assign(guest.attributes, {
      dietaryRestrictions: []
    }));
}

function fetchGuest(vars) {
  return new Guest(vars).fetch().then((guest) => {
    return guest.serialize();
  });
}

module.exports = root => Object.assign(root, {
  guests: listGuests,
  guest: fetchGuest,
  createGuest
});
