import update from 'immutability-helper';

module.exports = function upsertById(list, item) {
  const existingIndex = list.findIndex(i => i.id === item.id);
  if (existingIndex >= 0) {
    return update(list, { $splice: [[existingIndex, 1, item]] });
  }
  return update(list, { $push: [item] });
};
