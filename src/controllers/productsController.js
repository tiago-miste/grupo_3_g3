const db = require ('../database/models')
const sequelize = db.Sequelize

const Products = db.Product

const productsController = {

list: async (req, res) => {
    const products = await db.Product.findAll()
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
    Products.create({
        nombre: req.body.name,
        descripcion: req.body.description,
        precio: req.body.price,
        img: req.file.filename,
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
delete: async function (req, res) {
    try
    {const Product = await Products.findByPk(req.params.id)
     res.render('productsDelete', {Product})
    }
    catch(e) {console.log(e)}     
},
destroy: async function (req, res) {
    try {
        const deleted = await Products.destroy({where: {id:req.params.id}, force: true})
        res.send(deleted)
    }
    catch (e) {console.log(e)}
}
}

module.exports = productsController