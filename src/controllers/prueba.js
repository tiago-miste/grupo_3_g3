 /*loginProcess: async (req, res) => {
        db.Users.findOne(
            {
                where: {
                    email: req.body.email,
                    estado: 'A'
                }
            }
        )
        .then(user => {
            let usuarioJson = JSON.parse(JSON.stringify(user))

            userToLogin = usuarioJson;
        
            if(userToLogin) {
                //return res.send(userToLogin.password);
                if(userToLogin.password.substr(0,7) == '$2a$10$'){
                    let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
                    if(isOkThePassword) {
                        // Guarda todos los datos del usuario en una variable de session
                        // primero quitar el atributo password del objeto
                        delete userToLogin.password;
                        req.session.userLogged = userToLogin;

                        if(req.body.remember_user) {
                            res.cookie('userBrainstorming', req.body.email, { maxAge: (1000 * 60) * 360  })
                        }

                        return res.redirect('/home');
                    }
                    return res.render('users/login', {
                        categories,
                        subCategories,
                        errors: {
                            password: {
                                msg: '(*) Las credenciales son inválidas'
                            }
                        },
                        oldData: req.body,
                        nombrePagina: 'Inicio de Sesion'
                    });
                }

                if(userToLogin.password == req.body.password){
                    // Guarda todos los datos del usuario en una variable de session
                    // primero quitar el atributo password del objeto
                    delete userToLogin.password;
                    req.session.userLogged = userToLogin;

                    if(req.body.remember_user) {
                        res.cookie('userBrainstorming', req.body.email, { maxAge: (1000 * 60) * 60 })
                    }

                    return res.redirect('/home');
                }
                return res.render('users/login', {
                    categories,
                    subCategories,
                    errors: {
                        password: {
                            msg: '(*) Las credenciales son inválidas'
                        }
                    },
                    oldData: req.body,
                    nombrePagina: 'Inicio de Sesion'
                });

            }

            return res.render('users/login', {
                categories,
                subCategories,
                errors: {
                    email: {
                        msg: '(*) No se encuentra esta email en nuestra base de datos'
                    }
                },
                oldData: req.body,
                nombrePagina: 'Inicio de Sesion'
            });

        })
    },*/