const User = require('../models/User');

function userLoggedMiddleware(req, res, next){
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = User.findByField('email', emailInCookie);

    if (userFromCookie) {
        req.session.userLogged = userFromCookie;
    }
    if (req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next();
}

module.exports = userLoggedMiddleware;




let formulario = document.querySelector('.form');

formulario.addEventListener("submit", (e) => { 
    e.preventDefault()

    let errores = []

    let usuario = document.querySelector('.usuario')
    let contrasena = document.querySelector('.contrasena')

    if (usuario.value == ""){

        errores.push("Este espacio no puede estar vacio")
        usuario.classList.add('is-invalid')
        usuario.classList.remove('is-valid')

    }else{

        usuario.classList.add("is-invalid")
        usuario.classList.remove("is-valid")
    }

    if (contrasena.value == ""){

        errores.push("Este espacio no puede estar vacio")
        contrasena.classList.add('is-invalid')
        contrasena.classList.remove('is-valid')

    }else{

        contrasena.classList.add("is-invalid")
        contrasena.classList.remove("is-valid")
    }


    if (errores.lenght > 0){
        let ulErrores = document.querySelector('.errores')
        ulErrores.classList.add("alert-warning")
        ulErrores.innerHTML = ""
        for (let i = 0; i< errores.length; i++){
            ulErrores.innerHTML +=  `<li> ${errores[i]} </li>`
        }
    }

})