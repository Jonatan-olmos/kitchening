const {check,body} = require('express-validator');

module.exports = [
     check('name')
          .notEmpty().withMessage('El nombre es obligatorio'),
     check('address')
          .notEmpty().withMessage('La direccion es requerida'),
     check('url_map')
     .isURL().withMessage('La ubicación es requerida'),
     check('category')
     .notEmpty().withMessage('La categoría  es requerida'),
    
     check('description')
          .notEmpty().withMessage('La descripción es obligatoria').bail()
          .isLength({
               min: 20 ,
               max: 500
          }).withMessage('La descripción debe tener entre 20 y 500 caracteres')
          ,
    ]
