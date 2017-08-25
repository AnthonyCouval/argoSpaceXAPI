module.exports = function (app) {
    const user = require('../controllers/user'),
        passport = require('passport');

    app.route('/')
        .get(function (req, res) {
            res.render('index', {user: req.user});
        });

    app.route('/user/register')
        .get(function (req, res) {
            user.register(req, res);
        })
        .post(function (req, res, next) {
            user.newRegister(req, res, next);
        });

    app.route('/user/login')
        .post(passport.authenticate('local'), function (req, res) {
            user.login(req, res);
        });

    app.route('/user/logout')
        .get(function (req, res) {
            user.logout(req, res);
        });

};
