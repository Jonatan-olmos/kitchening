var express = require('express');
var router = express.Router();
const {index, contact, cart, admin} = require('../controllers/indexController')

/* / */
router
.get('/',index)
.get('/contact', contact)
.get('/carrito', cart)
.get('/admin',admin)

  module.exports = router;



