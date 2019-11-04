const express = require('express')
const router = express.Router()

const mongoose = require('./../conf/mongoConnection')
const Compra = require('./../models/compras')
const getCategorias = require('./../models/categorias')



router.get('/nueva', (req, res, next) => {
    getCategorias().then( (categorias) => {
        res.render('compras', {categorias: categorias})
    })
    
})

router.post('/nueva', (req, res, next) => {
    if (req.body._id === '') {
        nuevaCompra = new Compra({
            categoria: req.body.categoria,
            nombre: req.body.nombre,
            precioEstimado: req.body.precioEstimado
        })

        nuevaCompra.save()
        console.log('Nueva Compra: ', req.body)
    } else {

        Compra.findByIdAndUpdate(req.body._id, { $set: req.body }, {new: true}, (error, model) => {
            if (error) throw error
            console.log('Compra modificada: ', model)
        })
    }

    res.redirect('/')

})

router.get('/modificar/:idCompra', (req, res, next) => {
    let idCompra = req.params.idCompra
    Compra.findOne({_id: idCompra}, (error, compra) => {
        getCategorias().then( (categoriasList) => {
            
            let categorias = []
            categorias.push({nombre: compra.categoria})
            console.log(compra.categoria)
            categoriasList.forEach((key) => {
                if (key.nombre === compra.categoria) return
                categorias.push(key)
            })
            console.log(categorias)
            res.render('compras', {compra: compra, categorias: categorias})
        })
    })
})

router.get('/eliminar/:idCompra', (req, res, next) => {
    let idCompra = req.params.idCompra
    Compra.remove({_id: idCompra}, (error, compra) => {
        if (error) throw error
    })

    res.redirect('/')
})

module.exports = router