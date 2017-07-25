exports.up = async (knex) => {
  await knex.schema.createTable('dietary_restrictions', (table) => {
    table.increments('id').primary();
    table.string('label');
    table.timestamps();
  });

  await knex.schema.createTable('guests_dietary_restrictions', (table) => {
    table.integer('guests_id').references('guests.id');
    table.integer('dietary_restriction_id').references('dietary_restrictions.id');
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('guests_dietary_restrictions');
  await knex.schema.dropTable('dietary_restrictions');
};
