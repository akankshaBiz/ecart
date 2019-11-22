import knex from "./knexClient";


export async function fetchProductsList() {
    return await knex.raw(
        "SELECT * FROM products;"
    )
}


export async function fetchProductsById(prod_id) {
    return await knex.raw("select * from products where id = ?", [prod_id]);
}