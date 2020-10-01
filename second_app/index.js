'use strict'

const EXPRESS = require('express')
const BODYPARSER = require('body-parser')
const mongoose = require('mongoose')

const APP = EXPRESS()

APP.use(BODYPARSER.json())

require('./models/Pet')(APP)
require('./routes/petRoutes')(APP)

mongoose.connect('mongodb+srv://admin:admin@robapp.bihgx.mongodb.net/RobApp?retryWrites=true&w=majority')
const PORT = 5000

APP.listen(PORT, () => {
      console.log("Server Running")
})