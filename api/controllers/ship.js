const mongoose = require('mongoose'),
    Ship = mongoose.model('Ship');

exports.list = function(req, res) {
    Ship.find({}, function(err, ship) {
        if (err)
            res.send(err);
        res.json(ship);
    });
};

exports.create = function(req, res) {
    const newShip = new Ship(req.body);
    newShip.save(function(err, ship) {
        if (err)
            res.send(err);
        res.json(ship);
    });
};


exports.read = function(req, res) {
    Ship.findById(req.params.shipId, function(err, ship) {
        if (err)
            res.send(err);
        res.json(ship);
    });
};


exports.update = function(req, res) {
    Ship.findOneAndUpdate({_id: req.params.shipId}, req.body, {new: true}, function(err, ship) {
        if (err)
            res.send(err);
        res.json(ship);
    });
};


exports.delete = function(req, res) {
    Ship.remove({
        _id: req.params.shipId
    }, function(err, ship) {
        if (err)
            res.send(err);
        res.json({ message: 'Ship successfully deleted' });
    });
};
