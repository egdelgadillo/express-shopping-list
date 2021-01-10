const express = require('express');
const router = express.Router();

const mongoose = require('../conf/mongoConnection');
const ShoppingList = require('../models/ShoppingListModel');
const getCategories = require('../models/CategoryModel');

router.get('/new', (req, res, next) => {
  getCategories().then((categories) => {
    res.render('shopping-list', { categories: categories });
  });
});

router.post('/new', (req, res, next) => {
  if (req.body._id === '') {
    let newShoppingListItem = new ShoppingList({
      category: req.body.category,
      name: req.body.name,
      estimatedPrice: req.body.estimatedPrice,
    });

    newShoppingListItem.save();
    console.log('New Shopping List Item: ', req.body);
  } else {
    ShoppingList.findByIdAndUpdate(
      req.body._id,
      { $set: req.body },
      { new: true },
      (error, model) => {
        if (error) throw error;
        console.log('Modified Shopping List Item: ', model);
      }
    );
  }

  res.redirect('/');
});

router.get('/update/:itemId', (req, res, next) => {
  let itemId = req.params.itemId;
  ShoppingList.findOne({ _id: itemId }, (error, shoppingListItem) => {
    getCategories().then((categoriesList) => {
      let categoriesArray = [];
      categoriesArray.push({ nombre: shoppingListItem.category });

      categoriesList.forEach((key) => {
        if (key.nombre === shoppingListItem.category) return;
        categoriesArray.push(key);
      });

      res.render('shopping-list', {
        item: shoppingListItem,
        categories: categoriesArray,
      });
    });
  });
});

router.get('/remove/:itemId', (req, res, next) => {
  let itemId = req.params.itemId;
  ShoppingList.remove({ _id: itemId }, (error, shoppingListItem) => {
    if (error) throw error;
  });

  res.redirect('/');
});

module.exports = router;
