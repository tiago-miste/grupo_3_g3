const path = require ("path")

let cartController = {index: (req, res) => {res.sendFile (path.join(__dirname, "../views/cart.html"))}}

module.exports = cartController