const express = require ("express")

let cartController = require ("../controllers/cartController.js")

const router = express.Router()

router.get ("/", cartController.index)

module.exports = router