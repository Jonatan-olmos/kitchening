var express = require('express');
var router = express.Router();
const { detail, add, edit, create } = require('../controllers/productsController')

/* /productos */
router
.get('/detalle/:id', detail)
.get('/agregar', add)
.get('/editar/:id?', edit)
.post('/crear', create)

module.exports = router;

