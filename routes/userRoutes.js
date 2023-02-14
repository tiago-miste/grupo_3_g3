const uploadFile = require("../middlewares/multerMiddleware");
const validations = require("../middlewares/validateRegisterMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const router = require("./productsRouter");
const authMiddleware = require("../middlewares/authMiddleware");
const validateLoginForm = require("../middlewares/validateLoginForm")
const validateEditUser = require('../middlewares/validateEditUser')
const usersController = require('../src/controllers/usersController')
const adminMiddleware = require('../middlewares/adminMiddleware')

// formulario de registro
router.get("/register", guestMiddleware, usersController.register);

// procesar el registro
router.post("/register/create", uploadFile.single("avatar"), validations, usersController.processRegister);

//formualrio de login
router.get("/login", guestMiddleware, usersController.login);

//procesar el login
router.post("/login/create", validateLoginForm, usersController.loginProcess);

// perfil de usuario
router.get("/profile", authMiddleware, usersController.profile);

//edicion de usuario
router.get('/profile/edit/:id', authMiddleware, usersController.edit);
router.put('/profile/edit/update/:id', uploadFile.single("avatar"), validateEditUser, usersController.update);

//logout
router.post("/logout", usersController.logout)

//usuarios para admin
router.get("/users", authMiddleware, adminMiddleware, usersController.list)
router.delete('/user/delete/:id', adminMiddleware, usersController.destroy);

module.exports = router
