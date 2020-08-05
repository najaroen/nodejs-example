const express = require('express');

const router = express.Router();

router.get('/shop', (req, res, next) => {
    res.send("Hi guys shop")
})

module.exports = router