const path = require('path');
const { check } = require ('express-validator')

module.exports = 
[ check ('name').notEmpty().withMessage('Debes completar el nombre').bail()
                .isLength({ min: 3 }).withMessage('El nombre debe ser mas largo'),
  check ('description').isLength({ min: 4 }).withMessage('La descripcion debe ser mas larga'),
  
check ('imgFile').custom((value, { req }) => {
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