const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let shoppingListSchema = new Schema({
  category: { type: String },
  name: { type: String },
  estimatedPrice: { type: Number },
});

let ShoppingList = mongoose.model(
  'ShoppingList',
  shoppingListSchema,
  'ShoppingList'
);

module.exports = ShoppingList;
