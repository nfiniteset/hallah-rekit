const fs = require('fs');
const path = require('path');
const graphql = require('graphql');

/*
* Public GraphQL schema.
*/

module.exports = graphql.buildSchema(
  fs.readFileSync(path.join(__dirname, './Schema.gql'), 'utf-8')
);
