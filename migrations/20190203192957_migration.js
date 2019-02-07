
exports.up = function(knex, Promise) {
    return knex.schema.createTable('quotes', table => {
        table.increments('id').unsigned().primary();
        table.string('quote').notNullable().defaultsTo('');
        table.string('img').notNullable().defaultsTo('');
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable
};
