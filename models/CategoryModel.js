const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('../conf/mongoConnection');

const initialCategoriesList = [
  'Groceries',
  'Fresh Products',
  'Beverages',
  'Transportation',
  'Bath & Perfumes',
  'Cleaning Products',
  'Babies',
  'Pets',
  'Technology',
  'Home Appliances',
  'Home Maintenance',
  'Toys',
  'Library & Joy',
  'Vehicle & Transportation',
  'Hardware Store',
  'Outdoor',
];

let categorySchema = new Schema({
  name: String,
});

let Category = mongoose.model('Category', categorySchema, 'Category');

const getCategories = () => {
  return Category.find().exec();
};

getCategories().then((categories) => {
  if (categories.length === 0) {
    initialCategoriesList.forEach((category) => {
      new Category({ name: category }).save();
    });
  }
});

module.exports = getCategories;
