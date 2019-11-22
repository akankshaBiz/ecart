import knex from "knexClient";
var Cart = require('./cart');
var cart = new Cart();

describe("checkout products", () => {
    beforeEach(() => {
        knex("products").truncate();
        knex("promotions").truncate()
    });

    describe("product discounting", () => {
        // beforeEach(async () => {
        //     await knex("products").insert([
        //         {id: 1, name: 'A', price: 30},
        //         {id: 2, name: 'B', price: 20},
        //         {id: 3, name: 'C', price: 50},
        //         {id: 4, name: 'D', price: 15}
        //     ]);
        //     await knex("promotions").insert([
        //         {id: 1, prod_id: '1', base_price: 15, multiplier: 3},
        //         {id: 2, prod_id: '2', base_price: 5, multiplier: 2},
        //     ]);
        // });

        it("when cart checkout it should display all prod list with individual discount and total", async () => {
            cart.addItem({id: 1, name: 'A', price: 30}, 15, 3);
            cart.addItem({id: 1, name: 'A', price: 30}, 15, 3);
            cart.addItem({id: 1, name: 'A', price: 30}, 15, 3);
            cart.addItem({id: 2, name: 'B', price: 20}, 5, 2);
            cart.addItem({id: 2, name: 'B', price: 20}, 5, 2);
            var cartTotal = cart.checkoutCart();
            expect(cartTotal.items.length).toBe(2);
            expect(cartTotal.items[0].total).toBe(75);
            expect(cartTotal.items[1].total).toBe(35);

        });
    });
});
