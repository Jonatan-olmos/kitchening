var express = require('express');
var router = express.Router();
const { detail, add, edit } = require('../controllers/productsController')

/* /productos */
router
.get('/detalle/:id', detail)
.get('/agregar', add)
.get('/editar/:id?', edit)

module.exports = router;

