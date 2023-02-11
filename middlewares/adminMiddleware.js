function adminMiddleware(req, res, next){
    if (req.session.userLogged.id_rol != 1) {
        return res.redirect('/');
    }
    next();
}

module.exports = adminMiddleware;