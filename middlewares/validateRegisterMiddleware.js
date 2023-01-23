const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('fullName').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('email')
    .notEmpty().withMessage('Tienes que escribir un email').bail()
    .isEmail().withMessage('Tienes que escribir un formato de email valido'),
    body('password')
    .notEmpty().withMessage('Tienes que escribir una contraseña')
    .isLength({min: 8}).withMessage('La contraseña debe tener un minimo de 8 caracteres'),
    body('country').notEmpty().withMessage('Tienes que elegir un pais'),
    body('avatar').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = [ '.jpg', '.png'];

        if (!file){
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }

        return true;
    })
]