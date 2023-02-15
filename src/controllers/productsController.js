const { validationResult } = require('express-validator');
const db = require ('../database/models')
const sequelize = db.Sequelize
const Sequelize = require('sequelize');

const Products = db.Product

const productsController = {

list: async (req, res) => {
    const products = await db.Product.findAll()
    res.render('products', {products})
},

search: async(req, res) => {
  
    const products = await db.Product.findAll(
        {
            where: { nombre: { [Sequelize.Op.like]: `%${req.body.buscador}%`} },
           }
    )
    
    res.render('products', {products})
},

detail: async (req, res) => {
       const product = await db.Product.findByPk(req.params.id)
       res.render('product', {product})
},
add: function (req, res) {
    res.render('productsFormCreate')   
},
create: function (req,res) {
    const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('productsFormCreate', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
    Products.create({
        nombre: req.body.name,
        descripcion: req.body.description,
        precio: req.body.price,
        img: req.file.filename,
        id_categoria: req.body.categoria
    })
    .then(() => res.redirect('/products'))
},
edit: async function(req, res) {
    try
    {const Product = await Products.findByPk(req.params.id)
     res.render('productsFormEdit', {Product})
    }
    catch(e) {console.log(e)}
},
update: async function (req,res) { 
    const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('productsFormEdit', {
                errors: resultValidation.mapped(),
                Product: await Products.findByPk(req.params.id)
            });
        }
   
    let productToEdit = await Products.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(product => {
            data = product;
            return data;
        })


        Products.update(
            {
                nombre: req.body.name,
                descripcion: req.body.description,
                precio: req.body.price,
                img: req.file ? req.file.filename : productToEdit.img
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )
        .then(() => res.redirect('/products'))
        .catch(error => res.send(error)) 
},

destroy: async function (req, res) {
    try {
        const deleted = await Products.destroy({where: {id:req.params.id}, force: true})
        res.redirect('/products')
    }
    catch (e) {console.log(e)}
}
}

module.exports = productsController