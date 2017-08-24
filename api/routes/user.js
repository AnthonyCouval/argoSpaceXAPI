module.exports = function (app) {
    const user = require('../controllers/user'),
        passport = require('passport');

    app.route('/')
        .get(function (req, res) {
            res.render('index', {user: req.user});
        });

    app.route('/register')
        .get(function (req, res) {
            user.register(req, res);
        })
        .post(function (req, res, next) {
            user.newRegister(req, res, next);
        });

    app.route('/login')
        .get(function (req, res) {
            user.login(req, res);
        })
        .post(passport.authenticate('local'), function (req, res) {
            if (req.session.passport.user != null) {
                res.redirect('/');
            } else {
                res.redirect('/register');
            }
        });

    app.route('/logout')
        .get(function (req, res) {
            user.logout(req, res);
        });

    app.route('/user/:userId')
        .get(user.read)
        .put(function (req, res) {
            user.update(req, res)
        })
        .delete(function (req, res) {
            user.delete(req, res)
        });

};
