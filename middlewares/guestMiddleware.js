function guestMiddleware(req, res, next) {
    console.log("hola")
    if (req.session.userLogged) {
        return res.redirect('/profile');
    }
    next();
}

module.exports = guestMiddleware;