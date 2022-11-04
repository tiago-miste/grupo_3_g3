const express = require ("express")

let loginController = require ("../controllers/loginController.js")

const router = express.Router()

router.get ("/", loginController.index)

module.exports = router