const {existsSync, unlinkSync} = require('fs')
const { leerJSON, escribirJSON } = require("../../data");

module.exports = (req,res) =>{
const {id} = req.params
const products = leerJSON('products');
//return res.send(id)

const {mainImage} = product.find(product => product.id == id)

existsSync('public/images/' + mainImage) && unlinkSync('public/images/' + mainImage)

const productsFiltered = products.filter(product => product.id != id);


escribirJSON(productsFiltered, 'products')

return res.redirect('/admin')


}