exports.up = async (knex) => {
  await knex.schema.createTable('dietary_restrictions', (table) => {
    table.increments('id').primary();
    table.string('label');
    table.timestamps();
  });

  await knex.schema.createTable('guest_dietary_restrictions', (table) => {
    table.increments('id').primary();
    table.integer('guest_id').references('guests.id');
    table.integer('dietary_restriction_id').references('dietary_restrictions.id');
    table.timestamps();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('guest_dietary_restrictions');
  await knex.schema.dropTable('dietary_restrictions');
};
