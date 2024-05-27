var express = require('express');
var router = express.Router();
const { detail, add, edit, create, update, remover } = require('../controllers/productsController');


/* /productos */
router
.get('/detalle/:id', detail)
.get('/agregar', add)
.get('/editar/:id', edit)
.post('/crear', create)
.put('/actualizar/:id', update)
.delete('/eliminar/:id', remover)



module.exports = router;

