const mongoose = require('mongoose');
mongoose.PRomise = global.Promise;

mongoose.connect('mongoDb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.error(err));