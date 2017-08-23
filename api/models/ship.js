const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShipSchema = new Schema({
    name: {
        type: String,
        required: 'Name for ship is required'
    },
    cover_url: {
        type: String
    },
    description : {
        type: String
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('Ship', ShipSchema);