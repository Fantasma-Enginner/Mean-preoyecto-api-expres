const mongoose = require('mongoose')
require('dotenv').config({path:'variables.env'});

const conectarDB = async () =>{
       
    try {
         
        await mongoose.connect(process.env.DB_MONGO,{
            useNewUrlParser: true, // <-- no longer necessary
            useUnifiedTopology: true // <-- no longer necessary
        })
        console.log(' DB conectada')
    } catch (error) {
        console.log(error)
        process.exit(1)//detenemos la app
        
    }
}
module.exports = conectarDB