const express = require('express');
const { detail, add, edit, create, update, remove } = require('../controllers/productsController');
const upload = require('../middleware/upload');
const productAddValidation = require('../validations/product-add-validation');
const productEdditValidation = require('../validations/product-edit-validation')
const router = express.Router();

/* /productos */

router
  .get('/detalle/:id', detail)
  .get('/agregar',add)
  .post('/crear',upload.fields([
    {
      name : 'mainImage'

    },
    {
      name: 'images'

  }
]),productAddValidation, create)
  .get('/editar/:id',edit)
  .put('/actualizar/:id',upload.fields([
    {
      name : 'mainImage'

    },
    {
      name: 'images'

  }
]),productEdditValidation, update)
  .delete('/eliminar/:id',remove)

module.exports = router;