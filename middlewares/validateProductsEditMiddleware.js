const path = require('path');
const { body } = require('express-validator')

module.exports =
    [body('name').notEmpty().withMessage('Debes completar el nombre').bail()
        .isLength({ min: 3 }).withMessage('El nombre debe ser mas largo'),
    body('description').isLength({ min: 3 }).withMessage('La descripcion debe ser mas larga'),

    body('imgFile').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.JPG', '.PNG', '.JPEG'];

        if (!file) {
            
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }

        return true;
    })
    ]