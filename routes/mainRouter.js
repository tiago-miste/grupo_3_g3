// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');
router.get('/', mainController.index);
router.get('/register', mainController.register)
router.get('/login', mainController.login)
router.get('/cart', mainController.cart)
router.get('/create', mainController.create)
router.get('/products', mainController.products)

module.exports = router;