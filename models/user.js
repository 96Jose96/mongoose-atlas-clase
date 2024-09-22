// creamos el modelo del usuario. Esto permite que podamos realizar operaciones en la base de datos MongoDB
// relacionadas con la colección de usuarios. Para ello creamos una carpeta models y dentro crearemos nuestros modelos.
// En este caso creamos un archivo llamado User.js que contendrá nuestro modelo de User. De esta forma tendremos
// una estructura que nos permitirá el uso de operaciones CRUD (Create, Read, Update, Delete) que pueden realizarse en la base de datos.

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({ //se esta creando un nuevo esquema de mongoose llamado userschema
    username: String,
    email: String,
    password: String,
}, { timestamps: true }) // se pasa una opcion de esquema. La opcion timestamps indica a mongoose añada automaticamente dos campos a cada documento.
                         // createdAt (fecha y hora de creacion del documento) y updatedAt (fecha y hora de la ultima actualizacion del documento)
const User = mongoose.model('User', UserSchema)

module.exports = User