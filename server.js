const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Ship = require('./api/models/ship'),
    User = require('./api/models/user'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    passport = require('passport');

//Connexion à la base mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://argoTest:En_rg5fK_t9AZpf3@ds157233.mlab.com:57233/argospacex/user');

//Pour recevoir du JSON et le parser correctement
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Log des requêtes
app.use(morgan('dev'));

//Initialisation de passport
//app.use(passport.initialize());
//Appel de la stratégie passport
//require('./config/passport')(passport);

//Ajout des routes à l'app
require('./api/routes/ship')(app);
require('./api/routes/user')(app);

//Middleware qui détecte les mauvaises routes
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

//Ecoute du port
app.listen(port);



console.log('Api started port: ' + port);
