exports.up = async (knex) => {
  await knex.schema.createTable('guests', (table) => {
    table.increments().primary();
    table.string('name');
    table.timestamps();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('guests');
};
