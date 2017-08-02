const isFriday = require('date-fns/is_friday');
const isSaturday = require('date-fns/is_saturday');
const setDay = require('date-fns/set_day');
const Dinner = require('../models/Dinner');

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

module.exports = root => Object.assign(root, {
  createNextDinner
});
