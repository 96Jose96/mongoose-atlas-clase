const mongoose = require('mongoose')
require('dotenv').config() //carga las variables de entorno almacenadas en .env

const dbConnection = async() => {
    try {
        console.log(process.env.MONGO_URI)
        await mongoose.connect(process.env.MONGO_URI) //intenta conectar accediendo con process.env a las variables de entorno donde esta la uri
        console.log('Conexion con base de datos correcta')
    } catch (err) {
        console.error(err)
        throw new Error('Error al iniciar base de datos')
    }
}

module.exports = {
    dbConnection
}