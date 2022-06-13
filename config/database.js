const mongoose = require('mongoose');
mongoose.PRomise = global.Promise;

mongoose.connect('mongodb+srv://Jose:startagain@cluster0.lurmf.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error(err));