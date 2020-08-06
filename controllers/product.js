const Product = require('../models/products');

exports.fetchAll = (req, res, next) => {
    let result = Object.assign({
        message:'success',
        status:200,
        statusText:'ok',
        data:null
    })
    Product.fetchAll()
        .then(([row, field]) => {
            result.data = row
            res.status(200).send(result)
        })
        .catch((error) => {
            result.message = `${error.stack}`
            result.status = 500;
            result.statusText= 'error'
            res.status(500).send(result)
        })
    
}
exports.saveProduct = (req,res,next) => {
    const {title, url=null, price=0, status='Y'} = req.body;
    const product = new Product({t:{title, url, price, status}});
    let result = Object.assign({
        message:'success',
        status:201,
        statusText:'ok'
    })
    product.save()
        .then(() => {
            res.status(result.status)
                .send(result)
        })
        .catch((error) => {
            result.message = `${error.stack}`
            result.status = 500;
            result.statusText = 'error';
            res.status(result.status)
                .send(result);
        })

}

exports.findById = (req, res, next) => {
    const {id} = req.params;
    let result = Object.assign({
        message:'success',
        status:200,
        statusText:'ok',
        data:null
    }) 
    Product.findById({id:id})
        .then(([row, filed]) => {
            result.data = row
            res.status(200).send(result)
        })
        .catch((error) => {
           result.message = `${error.stack}`;
           result.status = 500;
           result.statusText = 'error';
           res.status(500).send(result)
        })
}