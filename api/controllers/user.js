const mongoose = require('mongoose'),
    User = mongoose.model('User'),
    passport = require('passport');

exports.register = function (req, res) {
    res.send('register', {});
};

/**
 * Pour enregistrer un nouvel utilisateur
 * @param req
 * @param res
 * @param next
 */
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

/**
 * Permets de se logguer si le couple username&password matche
 * @param req
 * @param res
 */
exports.login = function (req, res) {
    res.json({
        'status': 'success',
        'message' : 'User successfully connected'
    });
};

/**
 * Pour se déconnecter de la session passport
 * @param req
 * @param res
 */
exports.logout = function (req, res) {
    if (req.session.passport.user != null) {
        req.logout();
        res.json({
            'status': 'success',
            'message' : 'User successfully disconnected'
        });
    }
};