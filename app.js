const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');
const userLoggedMiddleware = require ("./middlewares/userLoggedMiddleware")


app.use(session({
    secret: "Shhh, It's a secret",
    resave: false,
    saveUninitialized: false,
}));

app.use(cookies());
app.use(userLoggedMiddleware)
app.use(express.static('public'));  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'))

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

const mainRouter = require('./routes/mainRouter')
const productsRouter = require('./routes/productsRouter');
const userRoutes = require('./routes/userRoutes');

app.use('/', mainRouter);
app.use(productsRouter);
app.use(userRoutes);

app.use ( async (req, res, next) => {
    res.status(404).render('notfound');
})

const port = process.env.PORT || 3002;
app.listen(port, () => { console.log(`Servidor corriendo en http://localhost:${port} 🤓👌`);})
