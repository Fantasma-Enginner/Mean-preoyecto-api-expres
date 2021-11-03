const Mongoose = require('mongoose');

const ProductoSchema = Mongoose.Schema({
    nombre:{
        type: String,
        require: true
    },
    categoria:{
        type: String,
        require: true
    },
    ubicacion:{
        type: String,
        require: true
    },
    precio:{
        type: Number,
        require: true
    },
    fechaCreacion:{
        type: Date,
        default: Date.now()
    }


})

module.exports = Mongoose.model('Producto',ProductoSchema);