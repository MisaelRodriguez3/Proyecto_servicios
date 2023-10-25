const materiasProceso = require('../procesos/materiasProceso');

const getAllMaterias = async (req, res) => {
    const materias = await materiasProceso.getAllMaterias();
    res.send(materias);
};

const getOneMateria = async (req, res) => {
    const materia = await materiasProceso.getOneMateria(req.params.idMateria);
    res.send(materia);
};

const createNewMateria = async (req, res) => {
    const materia = await materiasProceso.createNewMateria(req.body.nombreMateria);
    res.send(materia);
};

const updateOneMateria = async (req, res) => {
    const materia = await materiasProceso.updateOneMateria(req.params.idMateria, req.body.nombreMateria);
    res.send(materia);
};

const deleteOneMateria = async (req, res) => {
    const materia = await materiasProceso.deleteOneMateria(req.params.idMateria);
    res.send(materia);
};

module.exports = {
    getAllMaterias,
    getOneMateria,
    createNewMateria,
    updateOneMateria,
    deleteOneMateria,
};