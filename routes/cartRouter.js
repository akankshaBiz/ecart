
var express = require('express');
var router = express.Router();
var Cart = require('../controllers/cart');
var cart = new Cart();
var productDB = require('../model/product');
var promotionsDB = require('../model/promotions');
var promotions = {
    base_price: 0,
    multiplier: 0
};

/* GET users listing. */
router.get('/checkout', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({status: 200, data: cart.checkoutCart()}));
});

router.put('/add/:prod_id', function(req, res, next) {
    promotionsDB.fetchPromotions(req.params.prod_id).then(promos => {
        promotions = promos[0] || promotions;
        productDB.fetchProductsById(req.params.prod_id).then(product => {
            res.setHeader('Content-Type', 'application/json');
            cart.addItem(product[0], promotions.base_price  , promotions.multiplier);
            res.end(JSON.stringify({status: 200, data: product, msg: "updated"}));
        }).catch(err => {
            console.log(err)
            res.send(JSON.stringify({status: 400, msg: err}));
        });
    }).catch(err => {
        console.log(err)
        res.send(JSON.stringify({status: 400, msg: err}));
    });
});

module.exports = router;