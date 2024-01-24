const express = require('express');
const { createProduct, fetchAllProducts, fetchProductById, updateProduct } = require('../controller/Product');
const { Product } = require('../model/Product');
const { isAuth } = require('../services/common');

const router = express.Router();
//  /products is already added in base path
router.post('/', isAuth(), createProduct)
      .get('/', fetchAllProducts)
      .get('/:id', fetchProductById)
      .patch('/:id', isAuth(), updateProduct)

      

exports.router = router;
