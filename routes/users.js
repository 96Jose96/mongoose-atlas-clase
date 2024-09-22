// Por último crearemos las rutas y en ellas los diferentes endpoints(CRUD).
// Para ello creamos la carpeta routes y en ella el archivo users.js que hiremos completando con los diferentes endpoints:
// Ejemplo para el endpoint de crear un usuario nuevo:

const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.post('/create', async(req, res) => {
    try {
        const user = await User.create(req.body) //Se utiliza el modelo User (previamente definido con Mongoose) para crear un nuevo documento en la base de datos con los datos enviados en la solicitud (req.body). req.body contiene el JSON que envía el cliente, con los campos
        res.status(201).send(user) //res.status(201): Devuelve una respuesta con el código de estado HTTP 201 Created
    } catch (error) {
        console.error(error)
        res
            .status(500)
            .send({ message: 'There was a problem trying to create user' })
    }
})

module.exports = router