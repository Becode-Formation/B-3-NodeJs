const EXPRESS = require('express')
const bodyParser = require('body-parser')
const APP =  EXPRESS()

//Convertit l'info envoyé en format JSON /!\ A mettre avant le require 
APP.use(bodyParser.json())

require('./routes/userRoutes')(APP) // Require le module  APP du userRoute

const PORT = 5000


//Check
APP.listen(PORT, () => {
      console.log('Server Running')
})
