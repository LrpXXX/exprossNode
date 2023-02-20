const mongoose = require('mongoose');
const dbURL = 'mongodb://127.0.0.1:27017/WoniuMallTesing';
mongoose.connect(dbURL,
    {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true},
    function (err) {
    if (err) return console.log('connected error');
    console.log('connected WoniuMallTesing to database '+dbURL);
});