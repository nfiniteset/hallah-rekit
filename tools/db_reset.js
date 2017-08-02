const exec = require('child_process').execSync;
const dbConfig = require('../knexfile');

const dbName = dbConfig.development.connection.database;

exec(`dropdb ${dbName}`);
exec(`createdb ${dbName}`);
exec('knex migrate:latest');
