const passport = require('passport'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    username: String,
    password: String
}, {
    versionKey: false
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema, 'user');