const chuckNorrisService = require('../services/chuckNorrisService');

const getChuckNorris = async () => {
    const chuck = await chuckNorrisService.getChuckNorris();
    return chuck;
};

module.exports = {
    getChuckNorris,
}