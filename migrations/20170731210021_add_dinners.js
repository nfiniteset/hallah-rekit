exports.up = async (knex) => {
  await knex.schema.createTable('dinners', (table) => {
    table.increments('id').primary();
    table.text('note');
    table.dateTime('starts_at');
    table.timestamps();
  });

  await knex.schema.createTable('invitations', (table) => {
    table.increments('id').primary();
    table.integer('guest_id').references('guests.id');
    table.integer('dinner_id').references('dinners.id');
    table.timestamps();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('invitations');
  await knex.schema.dropTable('dinners');
};
