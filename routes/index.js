var express = require('express');
var router = express.Router();
var productDB = require('../model/product');


/* GET home page. */
router.get('/', function(req, res, next) {
  productDB.fetchProductsList().then(productList => {
    res.send(200).render('index');
  }).catch(err => {
    res.send({msg: err, status: 400});
  });

});

module.exports = router;
