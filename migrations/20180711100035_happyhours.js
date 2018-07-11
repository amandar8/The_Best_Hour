
exports.up = function(knex, Promise) {
  return knex.schema.createTable('happyhours', (table) => {
    table.increments('id').primary();
    table.string('restaurant_name');
    table.string('location');
    table.string('days');
    table.string('hours');
    table.text('specials');
    table.string('website');
  })
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('happyhours');
};
