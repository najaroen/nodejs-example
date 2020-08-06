const express = require('express');
const {fetchAll, saveProduct, findById} = require('../controllers/product')

const router = express.Router();

router.get('/all-product',fetchAll)
router.post('/save-product', saveProduct)
router.get('/find-product/:id', findById)


module.exports = router