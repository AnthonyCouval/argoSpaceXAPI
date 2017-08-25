const userCollection = process.env.npm_config_mongoDb + '/user';
const shipCollection = process.env.npm_config_mongoDb + '/ship';

module.exports = {
    userCollection,
    shipCollection
};