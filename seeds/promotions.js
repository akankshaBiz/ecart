
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('promotions').del()
    .then(function () {
      // Inserts seed entries
      return knex('promotions').insert([
        {id: 1, prod_id: '1', base_price: 15, multiplier: 3},
        {id: 2, prod_id: '2', base_price: 5, multiplier: 2},
      ]);
    });
};
