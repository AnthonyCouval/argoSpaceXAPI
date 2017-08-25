const userCollection = process.env.npm_config_mongoUrl + '/user';
const shipCollection = process.env.npm_config_mongoUrl + '/ship';

module.exports = {
    userCollection,
    shipCollection
};