const mongoose = require('mongoose');

if (!process.env.MONGO_USERNAME) {
  throw new Error(
    'You must specify the MONGO_USERNAME environment variable first!'
  );
}

if (!process.env.MONGO_PASSWORD) {
  throw new Error(
    'You must specify the MONGO_PASSWORD environment variable first!'
  );
}

if (!process.env.MONGO_URL) {
  throw new Error('You must specify the MONGO_URL environment variable first!');
}

if (!process.env.MONGO_DB) {
  throw new Error('You must specify the MONGO_DB environment variable first!');
}

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

module.exports = mongoose;
