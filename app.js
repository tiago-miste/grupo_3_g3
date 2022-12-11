// ************ Require's ************
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');

// ************ express() - (don't touch) ************
const app = express();

// ************ Middlewares - (don't touch) ************
app.use(session({
    secret: "Shhh, It's a secret",
    resave: false,
    saveUninitialized: false,
}));
app.use(cookies());
app.use(express.static('public'));  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'))

// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas

// ************ Sistema de Rutas ************
const mainRouter = require('./routes/mainRouter'); // Rutas main
const productsRouter = require('./routes/productsRouter') // Rutas /products

app.use('/', mainRouter);
app.use('/products', productsRouter)

//Pagina no encontrada
app.use ( async (req, res, next) => {
    res.status(404).render('notfound/notFound');
})

// ************ Creando servidor ************
const port = process.env.PORT || 3002;
app.listen(port, () => { console.log(`Servidor corriendo en http://localhost:${port} 🤓👌`);})