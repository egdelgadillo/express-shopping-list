const mongoose = require('mongoose')
const Schema = mongoose.Schema

let comprasSchema = new Schema({
    categoria: { type: String },
    nombre: {type: String },
    precioEstimado: { type: Number }
})

let Compra = mongoose.model('Compras', comprasSchema, 'Compras')

module.exports = Compra