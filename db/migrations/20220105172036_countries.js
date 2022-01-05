exports.up = function(knex) {
    return knex.schema
      .createTable('countries', function (table) {
        table.uuid('id').notNullable()
        table.json('regions').notNullable()
        table.string('code', 255).notNullable()
        table.string('name', 255).notNullable()
        table.decimal('latitude').notNullable()
        table.decimal('longitude').notNullable()
        table.string('flag_path', 255).notNullable()
        table.timestamps(false, true)
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTable('countries');
  };
