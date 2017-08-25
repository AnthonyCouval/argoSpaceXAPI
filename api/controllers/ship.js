const mongoose = require('mongoose'),
    Ship = mongoose.model('Ship');

/**
 * Liste toutes les fusées
 * @param req
 * @param res
 */
exports.list = function (req, res) {
    Ship.find({}, function (err, ship) {
        if (err)
            res.send(err);
        res.json(ship);
    });
};

/**
 * Créée une nouvelle fusée
 * @param req
 * @param res
 */
exports.create = function (req, res) {
    const newShip = new Ship(req.body);
    newShip.save(function (err, ship) {
        if (err)
            res.send(err);
        res.json(ship);
    });
};

/**
 * Retourne une fusée par Id
 * @param req
 * @param res
 */
exports.read = function (req, res) {
    Ship.findById(req.params.shipId, function (err, ship) {
        if (err)
            res.send(err);
        res.json(ship);
    });
};

/**
 * Mets à jours une fusée
 * @param req
 * @param res
 */
exports.update = function (req, res) {
    Ship.findOneAndUpdate({_id: req.params.shipId}, req.body, {new: true}, function (err, ship) {
        if (err)
            res.send(err);
        res.json(ship);
    });
};

/**
 * Supprime une fusée
 * @param req
 * @param res
 */
exports.delete = function (req, res) {
    Ship.remove({
        _id: req.params.shipId
    }, function (err, ship) {
        if (err)
            res.send(err);
        res.json({message: 'Ship successfully deleted'});
    });
};
