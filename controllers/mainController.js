const controller = {
    index: (req, res) => {res.render ('index')},
    register: (req, res) => {res.render('register')},
    login: (req, res) => {res.render('logIn')},
    products: (req, res) => {res.render ('products')},
    cart: (req, res) => {res.render('cart')},
    create: (req, res) => {res.render('productsFormCreate')}}
    
    module.exports = controller;