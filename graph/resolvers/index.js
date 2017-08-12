const root = {};

require('./dinners')(root);
require('./guests')(root);
require('./invitations')(root);

module.exports = root;
