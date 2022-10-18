const express = require ("express")
const app = express ()
const path = require ("path")

app.use (express.static ("public"))

const port = process.env.PORT || 3030

app.listen (port, () => console.log ("Servidor corriendo en el puerto ${port}"))

app.get ("/", (req, res) => (res.sendFile (path.join (__dirname, "./index.html"))))

app.get ("/register", (req, res) => (res.sendFile (path.join (__dirname, "./register.html"))))

app.get ("/login", (req, res) => (res.sendFile (path.join (__dirname, "./login.html"))))