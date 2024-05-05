var express = require('express');
var router = express.Router();
const { login, register } = require('../controllers/usersController')
/* /usuarios */
router.get('/ingreso',login)
      .get('/registro',register)

module.exports = router;
