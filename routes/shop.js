const express = require('express');
const {getProductList} = require('../controllers/shop')

const router = express.Router();

router.get('/shop',getProductList)

module.exports = router