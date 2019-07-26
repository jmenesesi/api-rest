var mongoose = require('mongoose');
// Setup schema
var productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
	note: String,
    price: {
        type: Number,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Product model
var Product = module.exports = mongoose.model('product', productSchema);
module.exports.get = function (callback, limit) {
    Product.find(callback).limit(limit);
}