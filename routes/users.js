// Por último crearemos las rutas y en ellas los diferentes endpoints(CRUD).
// Para ello creamos la carpeta routes y en ella el archivo users.js que hiremos completando con los diferentes endpoints:
// Ejemplo para el endpoint de crear un usuario nuevo:

const express = require('express')
const router = express.Router()
const User = require('../models/user')