const camelCase = require('lodash/fp/camelCase');

module.exports = function camelizeKeys(obj) {
  return Object.entries(obj).reduce(
    (memo, [key, val]) => Object.assign(memo, { [camelCase(key)]: val }), {}
  );
};
