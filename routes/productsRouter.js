// ************ Require's ************
const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController')

const uploadFile = require('../middlewares/multerMiddleware')

router.get('/', productsController.products)
router.get('/create', productsController.create)
router.post('/', uploadFile.single('imgFile'), productsController.store)
router.get('/detail/:id', productsController.detail)
router.get('/detail/edit/:id', productsController.edit)
router.put('/detail/edit/:id', uploadFile.single('imgFile'), productsController.update)
router.delete('/detail/delete/:id', productsController.destroy)

module.exports = router