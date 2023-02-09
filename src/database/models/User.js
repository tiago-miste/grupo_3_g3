function usuarios (sequelize, dataTypes) {

    const alias = "User"

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_rol: {
            type: dataTypes.INTEGER,
            foreignKey: true,
        },
        usuario: {
            type: dataTypes.STRING
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING(255)
        },
        direccion: {
            type: dataTypes.STRING
        },
        fecha_nacimiento: {
            type: dataTypes.DATE
        },
        img: {
        type: dataTypes.STRING(255)
        }}

    const config = {
        tableName: 'usuarios',
        timestamps: false
    }

    const Usuario = sequelize.define (alias, cols, config)

    return Usuario
}

module.exports = usuarios