const express = require('express');
const router = express.Router();

const mongoose = require('./../conf/mongoConnection')
const Compra = require('./../models/compras')
const getCategorias = require('./../models/categorias')



/* GET home page. */
router.get('/', (req, res, next) => {
  Compra.find((error, compras) => {
    if (error) throw error

    let precioTotal = 0
    compras.forEach( (key) => {
      precioTotal += key.precioEstimado
    })

    getCategorias().then((categorias) => {
      res.render('index', { compras: compras, total: compras.length, precioTotal: precioTotal , categorias: categorias});
    })
  })
});

/* GET home page. */
router.get('/:filter', (req, res, next) => {
  let filter = req.params.filter
  Compra.find({categoria: filter}, (error, compras) => {
    if (error) throw error

    let precioTotal = 0
    compras.forEach( (key) => {
      precioTotal += key.precioEstimado
    })

    getCategorias().then((categorias) => {
      res.render('index', { compras: compras, total: compras.length, precioTotal: precioTotal , categorias: categorias});
    })
  })
});

module.exports = router;
