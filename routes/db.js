var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mycustomers')
    .then(() => console.log('connection succesfull'))
    .catch((err) => console.log(err));