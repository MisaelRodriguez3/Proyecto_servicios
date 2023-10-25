const profesorProceso = require('../procesos/profesorProceso');

const getAllProfesores = async (req, res) => {
    const profesores = await profesorProceso.getAllProfesores();
    res.send(profesores);
};

const getOneProfesor = async (req, res) => {
    const profesor = await profesorProceso.getOneProfesor(req.params.idProfesor);
    res.send(profesor);
};

const createNewProfesor = async (req, res) => {
    const profesor = await profesorProceso.createNewProfesor(req.body.Nombre,
        req.body.Apellido, req.body.Correo);
    res.send(profesor);
};

const updateOneProfesor = async (req, res) => {
    const profesor = await profesorProceso.updateOneProfesor(req.params.idProfesor,
        req.body.Nombre, req.body.Apellido, req.body.Correo);
    res.send(profesor);
};

const deleteOneProfesor = async (req, res) => {
    const profesor = await profesorProceso.deleteOneProfesor(req.params.idProfesor);
    res.send(profesor);
};

module.exports = {
    getAllProfesores,
    getOneProfesor,
    createNewProfesor,
    updateOneProfesor,
    deleteOneProfesor,
};