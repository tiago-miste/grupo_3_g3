const { validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
const db = require('../database/models')
const sequelize = db.sequelize;

const User = db.User

const controller = {
    register: (req, res) => {
        
        return res.render('register');
    },
    processRegister: async (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0){
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
            const userInDB = await User.findOne({ where: { email: req.body.email } })
            if (userInDB) {
            return res.render('register', {
                errors: {
                    msg: 'Este email ya está registrado'
                },
                oldData: req.body
            });
        }
        const userTocreate = await User.create({
            usuario: req.body.usuario,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            direccion: req.body.direccion,
            fecha_nacimiento: req.body.fechaDeNacimiento,
            img: req.file.filename
        })
        res.redirect('/login')

    },

    login: (req, res) => {
        return res.render('logIn')
    },

    loginProcess: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email);

        if(userToLogin){
            let isOkThePassword = bcrypt.compareSync(req.body.password, userToLogin.password);
            if (isOkThePassword){
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if(req.body.remember_user) {
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2 })
                }

                return res.redirect('/user/profile');
            }
            return res.render('logIn', {
                errors: {
                    email: {
                        msg: 'Credenciales invalidas'
                    }
                }
            })
        }

        return res.render('logIn', {
            errors: {
                email: {
                    msg: 'No se encuentra este email en nuestra base de datos'
                }
            }
        })
    },
    profile: (req, res) => {
        return res.render('userProfile', {
            user: req.session.userLogged
        });
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }

}

module.exports = controller;