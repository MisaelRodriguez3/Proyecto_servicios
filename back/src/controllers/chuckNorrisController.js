const chukNorrisProceso = require('../procesos/chuckNorrisProceso');

const getChuckNorris = async (req, res) => {
    const chuck = await chukNorrisProceso.getChuckNorris();
    res.send(chuck);
};

module.exports = {
    getChuckNorris,
}