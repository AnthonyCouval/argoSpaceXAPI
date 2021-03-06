const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const ShipSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: 'Name for ship is required'
    },
    active: {
        type: Boolean
    },
    stages: {
        type: String
    },
    costPerLaunch: {
        type: String
    },
    successRatePct: {
        type: Number
    },
    firstFlight: {
        type: String
    },
    launchpad: {
        type: String
    },
    country: {
        type: String
    },
    company: {
        type: String
    },
    description: {
        type: String
    },
    coverUrl: {
        type: String
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('Ship', ShipSchema, 'ship');