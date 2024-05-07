var express = require('express');
var router = express.Router();
const {index, contact, cart, admin, searchAdmin} = require('../controllers/indexController')

/* / */
router
.get('/',index)
.get('/contact', contact)
.get('/carrito', cart)
.get('/admin',admin)
.get('/admin/productos/buscar',searchAdmin)


  module.exports = router;



