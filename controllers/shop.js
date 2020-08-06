
exports.getProductList = (req, res, next) => {
    const products = [
        {title:'Book', price:4.99, id:1},
        {title:'Orange', price:1.98, id:2},
        {title:'Sushi', price:3.50, id:3},
        {title:'Ramen', price:9.9, id:4}
    ]
    res.status(200).send(products)
}