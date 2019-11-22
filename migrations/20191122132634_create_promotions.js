
exports.up = function(knex) {
    return knex.schema.createTable('promotions', table => {
        table.increments()
        table.string('prod_id').notNullable()
        table.integer('base_price').notNullable()
        table.integer('multiplier').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('promotions')

};
