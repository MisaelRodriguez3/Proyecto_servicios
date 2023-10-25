const materiasBD = require('../database/materiasBD');

const getAllMaterias = async () => {
    const materias = await materiasBD.getAllMaterias();
    return materias;
};

const getOneMateria = async (idMateria) => {
    const materia = await materiasBD.getOneMateria(idMateria);
    return materia;
};

const createNewMateria = async (nombreMateria) => {
    const materia = await materiasBD.createNewMateria(nombreMateria);
    return materia;
};

const updateOneMateria = async (idMateria, nombreMateria) => {
    const materia = await materiasBD.updateOneMateria(idMateria, nombreMateria);
    return materia;
};

const deleteOneMateria = async (idMateria) => {
    const materia = await materiasBD.deleteOneMateria(idMateria);
    return materia;
};

module.exports = {
    getAllMaterias,
    getOneMateria,
    createNewMateria,
    updateOneMateria,
    deleteOneMateria,
};