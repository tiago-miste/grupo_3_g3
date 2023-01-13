const express = require('express');
const router = express.Router();
const productsController = require('../src/controllers/productsController');
const uploadFile = require ('../middlewares/multerMiddleware')

router.get('/products', productsController.list);
router.get('/products/detail/:id', productsController.detail);
router.get('/products/create', productsController.add);
router.post('/products', uploadFile.single("imgFile"), productsController.create);
router.get('/products/detail/edit/:id', productsController.edit);
router.post('/products/detail/update/:id', productsController.update);
router.get('/products/detail/delete/:id', productsController.delete);
router.post('/products/detail/delete/:id', productsController.destroy);


router.get('/', productsController.products)
router.get('/create', productsController.create)
router.post('/', uploadFile.single('imgFile'), productsController.store)
router.get('/detail/:id', productsController.detail)
router.get('/detail/edit/:id', productsController.edit)
router.put('/detail/edit/:id', uploadFile.single('imgFile'), productsController.update)
router.delete('/detail/delete/:id', productsController.destroy)


module.exports = router;