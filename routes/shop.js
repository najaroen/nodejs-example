const express = require('express');
const {getProductList, createShop} = require('../controllers/shop')

const router = express.Router();

router.get('/shop',getProductList)
router.post('/shop/add-shop',createShop)


module.exports = router