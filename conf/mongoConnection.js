const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://<YOUR-USERNAME>:<YOUR-PASSWORD>@expressdb-qdtrb.mongodb.net/<YOUR-DB-NAME>?retryWrites=true&w=majority', { useNewUrlParser: true })

module.exports = mongoose
