const path = require ("path")

let registerController = {index: (req, res) => {res.sendFile (path.join(__dirname, "../views/register.ejs"))}}

module.exports = registerController