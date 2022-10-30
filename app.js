const express = require ("express")
const app = express ()
const path = require ("path")

app.use (express.static ("public"))

const port = process.env.PORT || 3030;
app.listen(port, () => console.log("Servidor corriendo en el puerto ${http://localhost:3030}"));

const rutasMain = require("./routers/main.js")

const rutasRegister = require ("./routers/register.js")

const rutasLogin = require ("./routers/login.js")

const rutasCart = require ("./routers/cart.js")

app.use ("/", rutasMain)

app.use ("/register", rutasRegister)

app.use ("/login", rutasLogin)

app.use ("/cart", rutasCart)



