const express = require ("express")

let registerController = require ("../controllers/registerController.js")

const router = express.Router()

router.get ("/", registerController.index)

module.exports = router