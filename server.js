const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Ship = require('./api/models/ship'),
    User = require('./api/models/user'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    passport = require('passport'),
    session = require('express-session'),
    LocalStrategy = require('passport-local').Strategy;

//Connexion à la base mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://argoTest:En_rg5fK_t9AZpf3@ds157233.mlab.com:57233/argospacex/user');

//Pour recevoir du JSON et le parser correctement
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Log des requêtes
app.use(morgan('dev'));

//Ajout des routes à l'app
require('./api/routes/ship')(app);
require('./api/routes/user')(app);

//Initialisation de passport
app.use(session({
    cookieName: 'session',
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Middleware qui détecte les mauvaises routes
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

//Ecoute du port
app.listen(port);



console.log('Api started port: ' + port);
