function categorias (sequelize, dataTypes) {

    const alias = "Category"

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING
        }}

    const config = {
        tableName: 'categorias',
        timestamps: false
    }

    const Category = sequelize.define (alias, cols, config)

    Category.associate = function (models) {
        Category.hasMany (models.Product, {
            as: 'products',
            foreignKey: 'id_categoria'
        })
    }

    return Category
}

module.exports = categorias