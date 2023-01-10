function productos (sequelize, dataTypes) {

    const alias = "Product"

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_categoria: {
            type: dataTypes.INTEGER,
            foreignKey: true,
        },
        nombre: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        },
        precio: {
            type: dataTypes.INTEGER
        },
        img: {
        type: dataTypes.BLOB
        }}

    const config = {
        tableName: 'productos',
        timestamps: false
    }

    const Product = sequelize.define (alias, cols, config)

    return Product
}

module.exports = productos