const root = {};

require('./dinners')(root);
require('./guests')(root);

module.exports = root;
