const express = require('express');
const router = express.Router();
const productsController = require('../src/controllers/productsController');
const uploadFile = require ('../middlewares/multerMiddleware')
const adminMiddleware = require('../middlewares/adminMiddleware')

router.get('/products', productsController.list);
router.get('/products/detail/:id', productsController.detail);
router.get('/products/create', adminMiddleware, productsController.add);
router.post('/products', uploadFile.single("imgFile"), productsController.create);
router.get('/products/detail/edit/:id', adminMiddleware, productsController.edit);
router.put('/products/detail/update/:id', uploadFile.single("imgFile"), productsController.update);
//router.get('/products/detail/delete/:id', productsController.delete);
router.delete('/products/detail/delete/:id', productsController.destroy);

module.exports = router;