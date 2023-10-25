const alumnoProceso = require('../procesos/alumnoProceso');

const getAllAlumnos = async (req, res) => {
    const alumnos = await alumnoProceso.getAllAlumnos();
    res.send(alumnos);
};

const getOneAlumno = async (req, res) => {
    const alumno = await alumnoProceso.getOneAlumno(req.params.alumnoId);
    res.send(alumno);
};

const createNewAlumno = async (req, res) => {
    const alumno = await alumnoProceso.createNewAlumno(req.body.nombres, req.body.apellidos,
        req.body.telefono, req.body.direccion);
    res.send(alumno);
};

const updateOneAlumno = async (req, res) => {
    const alumno = await alumnoProceso.updateOneAlumno(req.params.alumnoId, req.body.nombres,
        req.body.apellidos, req.body.telefono, req.body.direccion);
    res.send(alumno);
};

const deleteOneAlumno = async (req, res) => {
    const alumno = await alumnoProceso.deleteOneAlumno(req.params.alumnoId);
    res.send(alumno);
};

module.exports = {
    getAllAlumnos,
    getOneAlumno,
    createNewAlumno,
    updateOneAlumno,
    deleteOneAlumno,
};