import knex from "../knexClient";

export async function fetchPromotions(prod_id) {
    return await knex.raw("select * from promotions where prod_id = ?", [prod_id]);
}