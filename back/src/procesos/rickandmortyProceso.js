const rickandmortyService = require('../services/rickandmortyService');

const getPersonajes = async () => {
    const personajes = await rickandmortyService.getPersonajes();
    return personajes;
};

module.exports = {
    getPersonajes,
};