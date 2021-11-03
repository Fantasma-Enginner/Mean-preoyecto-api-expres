const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')
const conectarDB = require('./config/db')
//creamos el servidor
const app = express()
//conectamos a la DB
conectarDB();
app.use(cors())
app.use(express.json());
app.use('/api/productos', require('./routes/productos'));
// definimos el puerto y arrancamnos el servidor
app.set('Port',4000)
app.use(morgan('dev'))
app.listen(app.get('Port'),()=>{
    console.log('Corriendo perfecto el servidor Port', app.get('Port'))
})