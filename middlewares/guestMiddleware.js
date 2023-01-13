function guestMiddleware(req, res, next) {
    if (req.session.userLogged) {
        return res.redirect('/user/profile');
    }
    next();
}

function guestMiddleware(req, res, next) {
    if (res.session.userLogged) {
        return res.redirect("/user/profile")
    } else{
        next()
    }
}

module.exports = guestMiddleware;