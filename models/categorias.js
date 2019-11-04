const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mongooseConnection = require('./../conf/mongoConnection')

let categoriaSchema = new Schema({
    nombre: String,
})

let Categoria = mongoose.model('Categorias', categoriaSchema, 'Categorias')

const getCategorias = () => {
    return Categoria.find().exec()
}

module.exports = getCategorias