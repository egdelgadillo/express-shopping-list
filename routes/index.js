const express = require('express');
const router = express.Router();

const mongoose = require('./../conf/mongoConnection');
const ShoppingList = require('./../models/ShoppingListModel');
const getCategories = require('./../models/CategoryModel');

/* GET home page. */
router.get('/', (req, res, next) => {
  ShoppingList.find((error, shoppingList) => {
    if (error) throw error;

    let totalEstimatedPrice = 0;
    shoppingList.forEach((key) => {
      totalEstimatedPrice += key.estimatedPrice;
    });

    getCategories().then((categories) => {
      res.render('index', {
        shoppingList: shoppingList,
        total: shoppingList.length,
        totalEstimatedPrice: totalEstimatedPrice,
        categories: categories,
      });
    });
  });
});

/* GET home page. */
router.get('/:filter', (req, res, next) => {
  let filter = req.params.filter;
  ShoppingList.find({ category: filter }, (error, shoppingList) => {
    if (error) throw error;

    let totalEstimatedPrice = 0;
    shoppingList.forEach((key) => {
      totalEstimatedPrice += key.estimatedPrice;
    });

    getCategories().then((categories) => {
      res.render('index', {
        shoppingList: shoppingList,
        total: shoppingList.length,
        totalEstimatedPrice: totalEstimatedPrice,
        categories: categories,
      });
    });
  });
});

module.exports = router;
