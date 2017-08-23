const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Ship = require('./api/models/ship'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/spaceX');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

const routes = require('./api/routes/ship');
routes(app);

app.listen(port);

console.log('Api started port: ' + port);
