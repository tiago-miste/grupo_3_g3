const express = require('express')
const router = express.Router()
const apiUsersController = require ('../src/controllers/apiUsersController.js')

router.get('/', apiUsersController.all)
router.get('/:id', apiUsersController.detail)

module.exports = router