const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('usuario')
        .notEmpty().withMessage('Este campo no debe estar vacio').bail(),
    body('direccion')
        .notEmpty().withMessage('Este campo no debe estar vacio').bail(),
        
        body('avatar').custom((value, { req }) => {
            let file = req.file;
            let acceptedExtensions = [ '.jpg', '.jpeg' , '.png', '.JPG', '.PNG', '.JPEG'];
    
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