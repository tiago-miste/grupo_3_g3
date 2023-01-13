const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../src/data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    products: (req, res) => {
        //Listado de productos
        products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('products', {products})
    },
    create: (req, res) => {
        //Mostrar formulario para crear producto
        res.render('productsFormCreate');
    },
    store: (req,res) => {
        // Guardado del producto
        let newProduct = {
            id: products[products.length - 1].id + 1,
            nombre: req.body.name,
            descripcion: req.body.description,
            img: req.file.filename,
            categoria: req.body.category,
            talle: req.body.size,
            precio: req.body.price
        }
        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
        res.redirect('/products');
    },
    detail: (req, res) => {
        //Detalles de un producto
        const id = req.params.id;
        const product = products.find(product => product.id == id);
        res.render('product', {
            product
        })
    },
    edit: (req, res) => {
        //Mostrar formulario para editar producto
        const id = req.params.id;
        const product = products.find(product => product.id == id);
        res.render('productsFormEdit', {
            product
        })
    },
    update: (req, res) => {
        // Se edita el producto que llego por parametro
        const id = req.params.id;
        const productToEdit = products.find(product => product.id == id);

        const editProduct = {
            id: id,
            nombre: req.body.name,
            descripcion: req.body.description,
            img: req.file ? req.file.filename : productToEdit.img,
            categoria: req.body.category,
            talle: req.body.size,
            precio: req.body.price
        }

        // modificado el array
        products.forEach((product, index) => {
            if(product.id == id) {
                products[index] = editProduct;
            }
        });
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
        res.redirect('/products');
    },
    destroy: (req, res) => {
        // Eliminando el producto por parametro id
        const id = req.params.id;

        const finalProducts = products.filter(product => product.id != id);
        fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, " "));
        res.redirect('/products');
    }
};

module.exports = controller;
