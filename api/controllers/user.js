const mongoose = require('mongoose'),
    User = mongoose.model('User'),
    passport = require('passport');

exports.register = function (req, res) {
    res.send('register', {});
};

exports.newRegister = function (req, res, next) {
    User.register(new User({username: req.body.username}), req.body.password, function (err, user) {
        if (err) {
            res.send(err);
        }

        passport.authenticate('local')(req, res, function () {
            req.session.save(function (err) {
                if (err) {
                    res.send();
                }
                res.json({
                    'status': 'success',
                    'message' : 'User successfully created'
                });
            });
        });
    });
};

exports.login = function (req, res) {
    res.json({
        'status': 'success',
        'message' : 'User successfully connected'
    });
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