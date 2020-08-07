const Shop = require('../models/shop')
exports.getProductList = (req, res, next) => {
    const products = [
        {title:'Book', price:4.99, id:1},
        {title:'Orange', price:1.98, id:2},
        {title:'Sushi', price:3.50, id:3},
        {title:'Ramen', price:9.9, id:4}
    ]
    res.status(200).send(products)
}
exports.createShop = (req, res, next) => {
    const {shopName, shopImgUrl, shopDescription=""} = req.body;
    let response = Object.assign({
        message:'success',
        status:201,
        statusText:'ok',
    })
    Shop.create({
        shopName,
        shopImgUrl,
        shopDescription,
        createdAt: new Date(),
        updatedAt:new Date()
    })
    .then((result) => {
        console.log('result', result);
        res.status(response.status)
            .send(response)
    })
    .catch((error) => {
        console.log('error', error);
        response.status = 500
        res.status(response.status)
            .send(response)
    })

}