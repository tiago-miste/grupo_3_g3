const express = require ("express")
const app = express ()
const path = require ("path")

app.use (express.static ("public"))

const port = process.env.PORT || 3030;
app.listen(port, () => console.log("Servidor corriendo en el puerto ${http://localhost:3030}"));

app.get ("/", (req, res) => {
    res.sendFile (path.resolve(__dirname, "./views/index.html"))
})

app.get ("/register", (req, res) => {
    res.sendFile (path.join(__dirname, "./views/register.html"))
})

app.get ("/login", (req, res) => {
    res.sendFile (path.join(__dirname, "./views/login.html"))
})

app.get ("/cart", (req, res) => {
    res.sendFile (path.join(__dirname, "./views/cart.html"))
})