module.exports = function (app) {
    const user = require('../controllers/user');


    app.route('/user')
        .get(function (req, res) {
                user.list(req, res)
            }
        )
        .post(function (req, res) {
                user.create(req, res)
            }
        );


    app.route('/user/:userId')
        .get(user.read)
        .put(function (req, res) {
            user.update(req, res)
        })
        .delete(function (req, res) {
            user.delete(req, res)
        });

};
