const { leerJSON, escribirJSON } = require("../../data");
const Product = require("../../data/Product");
const {validationResult} = require('express-validator')

module.exports = (req,res) => {
const errors = validationResult(req)
return res.send(errors)

    const {name, address,url_map, description, category} = req.body;

    const mainImage = req.file;

    const newProduct = new Product(name, address, url_map, description, category, mainImage)
    const products = leerJSON('products');

    products.push(newProduct);

    escribirJSON(products, 'products')

    return res.redirect('/admin')

}