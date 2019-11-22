
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, name: 'A', price: 30},
        {id: 2, name: 'B', price: 20},
        {id: 3, name: 'C', price: 50},
        {id: 4, name: 'D', price: 15}
      ]);
    });
};
