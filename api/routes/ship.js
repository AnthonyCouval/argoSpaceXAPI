module.exports = function(app) {
    const ship = require('../controllers/ship');

    app.route('/ship')
        .get(ship.list)
        .post(function(req, res) {
                ship.create(req, res)
            }
        );


    app.route('/ship/:shipId')
        .get(ship.read)
        .put(function(req, res){
            ship.update(req, res)
        })
        .delete(function(req, res){
            ship.delete(req, res)
        });

    app.use(function(req, res) {
        res.status(404).send({url: req.originalUrl + ' not found'})
    });
};
