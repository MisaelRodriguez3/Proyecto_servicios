const materiasService = require('../services/materiasService');

const getAllMaterias = async () => {
    const materias = await materiasService.getAllMaterias();
    return materias;
};

const getOneMateria = async (idMateria) => {
    const materia = await materiasService.getOneMateria(idMateria);
    return materia;
};

const createNewMateria = async (idMateria, nombreMateria) => {
    const materia = await materiasService.createNewMateria(idMateria, nombreMateria);
    return materia;
};

const updateOneMateria = async (idMateria, nombreMateria) => {
    const materia = await materiasService.updateOneMateria(idMateria, nombreMateria);
    return materia;
};

const deleteOneMateria = async (idMateria) => {
    const materia = await materiasService.deleteOneMateria(idMateria);
    return materia;
};

module.exports = {
    getAllMaterias,
    getOneMateria,
    createNewMateria,
    updateOneMateria,
    deleteOneMateria,
};