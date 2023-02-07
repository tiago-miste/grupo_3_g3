const uploadFile = require("../middlewares/multerMiddleware");
const validations = require("../middlewares/validateRegisterMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const router = require("./productsRouter");
const authMiddleware = require("../middlewares/authMiddleware");
const usersController = require('../src/controllers/usersController')

// formulario de registro
router.get("/register", guestMiddleware, usersController.register);

// procesar el registro
router.post("/register", uploadFile.single("avatar"), validations, usersController.processRegister);

//formualrio de login
router.get("/login", guestMiddleware, usersController.login);

//procesar el login
router.post("/login", authMiddleware, usersController.loginProcess);

// perfil de usuario
router.get("/profile/", authMiddleware, usersController.profile);

router.get("/logout/", usersController.logout)

module.exports = router
