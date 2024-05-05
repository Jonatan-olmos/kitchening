var express = require('express');
var router = express.Router();
const { detail } = require('../controllers/productsController')

/* /productos */
router
.get('/detalle/:id?', detail);

module.exports = router;

