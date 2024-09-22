const express = require('express')
const app = express()
const PORT = 8080
const {dbConnection} = require('./config/config')

dbConnection()







app.listen(PORT, () => console.log(`Server listen on port ${PORT}`))