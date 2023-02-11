// ************ Require's ************
const express = require('express');
const router = express.Router();
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
// ************ Controller Require ************

const mainController = require('../src/controllers/mainController');

router.get('/', mainController.index);

//

router.get('/register', guestMiddleware, mainController.register)

//
router.get('/login', guestMiddleware, mainController.login)

//

router.get('/cart', authMiddleware, mainController.cart)

//

module.exports = router;