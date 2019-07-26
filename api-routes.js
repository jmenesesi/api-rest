// Inicializando el express router
let router = require('express').Router();
// Declarando la respuesta por default
router.get('/', function (req, res) {
    res.json({
        status: 'La API esta trabajando',
        message: 'Bienvenido a la API Rest!'
    });
});


// Importando el controlador de producto
var productController = require('./controllers/productController');
// Product routes
router.route('/products')
    .get(productController.index)
    .post(productController.new);
	
router.route('/products/:product_id')
    .get(productController.view)
    .patch(productController.update)
    .put(productController.update)
    .delete(productController.delete);
	
// Exportando las API routes
module.exports = router;