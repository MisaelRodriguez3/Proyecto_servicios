const profesoresBD = require('../database/profesorBD');

const getAllProfesores = async () => {
    const profesores = await profesoresBD.getAllProfesores();
    return profesores;
};

const getOneProfesor = async (idProfesor) => {
    const profesor = await profesoresBD.getOneProfesor(idProfesor);
    return profesor;
};

const createNewProfesor = async (Nombre, Apellido, Telefono) => {
    const profesor = await profesoresBD.createNewProfesor(Nombre, Apellido, Telefono);
    return profesor;
};

const updateOneProfesor = async (idProfesor, Nombre, Apellido, Correo) => {
    const profesor = await profesoresBD.updateOneProfesor(idProfesor, Nombre, Apellido, Correo);
    return profesor;
};

const deleteOneProfesor = async (idProfesor) => {
    const profesor = await profesoresBD.deleteOneProfesor(idProfesor);
    return profesor;
};

module.exports = {
    getAllProfesores,
    getOneProfesor,
    createNewProfesor,
    updateOneProfesor,
    deleteOneProfesor,
};