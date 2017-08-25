const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Ship = require('./api/models/ship'),
    User = require('./api/models/user'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    passport = require('passport'),
    session = require('express-session'),
    cookieParser = require('cookie-parser');
    LocalStrategy = require('passport-local').Strategy,
    config = require('./config/main');

//Pour recevoir du JSON et le parser correctement
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Log des requêtes
app.use(logger('dev'));

//Initialisation de passport
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'the cake is a lie',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// passport config
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Ajout des routes à l'app
require('./api/routes/ship')(app);
require('./api/routes/user')(app);

//Connexion à la base mongo
mongoose.Promise = global.Promise;
mongoose.connect(config.userApi);

//Middleware qui détecte les mauvaises routes
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

//Ecoute du port
app.listen(port);

console.log('Api started port: ' + port);