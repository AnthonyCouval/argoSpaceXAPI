const mongoose = require('mongoose'),
    User = mongoose.model('User'),
    passport = require('passport');

exports.list = function (req, res) {
    User.find({}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.read = function (req, res) {
    User.findById(req.params.userId, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.create = function (req, res) {
    const newUser = new User(req.body);
    newUser.save(function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.register = function (req, res) {
    if (req.session.passport.user != null) {
        res.redirect('/');
    } else {
        res.render('register', {
            title: 'Sign-up'
        });
    }
};

exports.newRegister = function (req, res, next) {
    User.register(new User({username: req.body.username}), req.body.password, function (err, user) {
        if (err) {
            return res.render('register', {error: err.message});
        }

        passport.authenticate('local')(req, res, function () {
            req.session.save(function (err) {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });
        });
    });
};

exports.login = function (req, res) {
    if (req.session.passport.user != null) {
        res.redirect('/');
    } else {
        res.render('login', {
            user: req.user,
            title: 'Sign-in',
            subTitle: 'Come back please !'
        });
    }
};

exports.logout = function (req, res) {
    if (req.session.passport.user != null) {
        req.logout();
        res.redirect('/');
    }
    else {
        res.redirect('/')
    }
};

exports.delete = function (req, res) {
    User.remove({
        _id: req.params.userId
    }, function (err, user) {
        if (err)
            res.send(err);
        res.json({message: 'User successfully deleted'});
    });
};
