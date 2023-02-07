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
        contraseña: {
            type: dataTypes.STRING
        },
        direccion: {
            type: dataTypes.STRING
        },
        FechaDeNacimiento: {
            type: dataTypes.DATE
        },
        img: {
        type: dataTypes.BLOB
        }}

    const config = {
        tableName: 'usuarios',
        timestamps: false
    }

    const Usuario = sequelize.define (alias, cols, config)

    return Usuario
}

module.exports = usuarios