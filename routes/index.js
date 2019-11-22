var express = require('express');
var router = express.Router();
var productDB = require('../model/product');


/* GET home page. */
router.get('/products', function(req, res, next) {

  productDB.fetchProductsList().then(productList => {
    res.setHeader('Content-Type', 'application/json');
    // res.send({status: 200, data: productList});
    res.end(JSON.stringify({status: 200, data: productList}));
  }).catch(err => {
    res.send({msg: err, status: 400});
  });

});

router.get('/products/:prod_id', function(req, res, next) {
  productDB.fetchProductsById(req.params.prod_id).then(product => {
    res.setHeader('Content-Type', 'application/json');
    // res.send({status: 200, data: productList});
    res.end(JSON.stringify({status: 200, data: product}));
  }).catch(err => {
    res.send({msg: err, status: 400});
  });

});

module.exports = router;
