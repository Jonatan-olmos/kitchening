var express = require('express');
var router = express.Router();
const {index, contact, cart} = require('../controllers/indexController')

/* / */
router
.get('/',index)
.get('/contact', contact)
.get('/carrito', cart)


  module.exports = router;



