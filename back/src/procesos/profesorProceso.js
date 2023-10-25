const profesorService = require('../services/profesorService');

const getAllProfesores = async () => {
    const profesores = await profesorService.getAllProfesores();
    return profesores;
};

const getOneProfesor = async (idProfesor) => {
    const profesor = await profesorService.getOneProfesor(idProfesor);
    return profesor;
};

const createNewProfesor = async (Nombre, Apellido, Correo) => {
    const profesor = await profesorService.createNewProfesor(Nombre, Apellido, Correo);
    return profesor;
};

const updateOneProfesor = async (idProfesor, Nombre, Apellido, Correo) => {
    const profesor = await profesorService.updateOneProfesor(idProfesor, Nombre, Apellido, Correo);
    return profesor;
};

const deleteOneProfesor = async (idProfesor) => {
    const profesor = await profesorService.deleteOneProfesor(idProfesor);
    return profesor;
};

module.exports = {
    getAllProfesores,
    getOneProfesor,
    createNewProfesor,
    updateOneProfesor,
    deleteOneProfesor,
}