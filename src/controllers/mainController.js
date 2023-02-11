const controller = {
    index: (req, res) => {res.render ('index')},
    register: (req, res) => {res.render('register')},
    login: (req, res) => {res.render('logIn')},
    cart: (req, res) => {res.render('cart')},
    devTeam: (req, res) => {res.render('devTeam')}
}

module.exports = controller

