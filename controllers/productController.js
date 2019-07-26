// Importando modelo product
Product = require('../models/product');

// Manejar acciones de indice
exports.index = function (req, res) {
    Product.get(function (err, products) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Products retrieved successfully",
            data: products
        });
    });
};
// Manejar acciones de creacion de producto.
exports.new = function (req, res) {
    var product = new Product();
    product.name = req.body.name ? req.body.name : product.name;
    product.note = req.body.note;
    product.price = req.body.price;

    product.save(function (err) {

res.json({
            message: 'New product created!',
            data: product
        });
    });
};

// Manejar acciones para ver informacion de producto
exports.view = function (req, res) {
    Product.findById(req.params.product_id, function (err, product) {
        if (err)
            res.send(err);
        res.json({
            message: 'Product details loading..',
            data: product
        });
    });
};
// Manejar acciones para actualizar el producto
exports.update = function (req, res) {
Product.findById(req.params.product_id, function (err, product) {
        if (err)
            res.send(err);
product.name = req.body.name ? req.body.name : product.name;
        product.gender = req.body.gender;
        product.email = req.body.email;
        product.phone = req.body.phone;
        product.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Product Info updated',
                data: product
            });
        });
    });
};
// Manejar acciones para eliminacion de producto
exports.delete = function (req, res) {
    Product.remove({
        _id: req.params.product_id
    }, function (err, product) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Product deleted'
        });
    });
};