const rickandmortyProceso = require('../procesos/rickandmortyProceso');

const getPersonajes = async (req, res) => {
    const personajes = await rickandmortyProceso.getPersonajes();
    res.send(personajes);
};

module.exports = {
    getPersonajes,
};