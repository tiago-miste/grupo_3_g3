const express = require('express');
const validations = require('../middlewares/validateProductsFormMiddleware');
const router = express.Router();
const productsController = require('../src/controllers/productsController');
const uploadFile = require ('../middlewares/multerMiddleware')
const adminMiddleware = require('../middlewares/adminMiddleware')
const authMiddleware = require("../middlewares/authMiddleware");
const validateEdit = require('../middlewares/validateProductsEditMiddleware')

router.get('/products', productsController.list);
router.post('/products/search', productsController.search)

router.get('/products/detail/:id', productsController.detail);
router.get('/products/create', authMiddleware ,adminMiddleware, productsController.add);
router.post('/products', uploadFile.single("imgFile"), validations, productsController.create);
router.get('/products/detail/edit/:id', authMiddleware, adminMiddleware, productsController.edit);
router.put('/products/detail/update/:id', uploadFile.single("imgFile"), validateEdit, productsController.update);

router.delete('/products/detail/delete/:id', productsController.destroy);

module.exports = router;