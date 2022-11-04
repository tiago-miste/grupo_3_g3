const path = require ("path")

let cartController = {index: (req, res) => {res.sendFile (path.join(__dirname, "../views/cart.ejs"))}}

module.exports = cartController