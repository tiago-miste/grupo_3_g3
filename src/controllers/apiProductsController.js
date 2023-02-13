const db = require('../database/models')

module.exports = {
    all: async (req, res) => {
        let response = {
        count: 0, 
        countByCategory: {},
        products: [],
      }
      let products = await db.Product.findAll({include:['categoria']})
      let categories = await db.Category.findAll({include: ['products']})
      categories.forEach(category => response.countByCategory[category.nombre] = category.products.length)
      response.count = products.length
      response.products = products.map(product => {
        let productDetail = {
          id: product.id,
          nombre: product.nombre,
          descripcion: product.descripcion,
          associations: [product.categoria],
          detail: `/api/products/${product.id}`,
          image: `http://localhost:3002/images/${product.img}`
        }
        return productDetail
      })
      return res.json(response)
    },
    detail: async (req, res) => {
      
      let product = await db.Product.findByPk(req.params.id ,{include:['categoria']})
      let response = {
        id: product.id,
        nombre: product.nombre,
        associations: [product.categoria],
        descripcion: product.descripcion,
        image: `http://localhost:3002/images/${product.img}`
      }
      return res.json(response)
      }
  }