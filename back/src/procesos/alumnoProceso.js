const alumnoService = require('../services/alumnoService');

const getAllAlumnos = async () => {
    const alumnos = await alumnoService.getAllAlumnos();
    return alumnos;
};

const getOneAlumno = async (alumnoId) => {
    const alumno = await alumnoService.getOneAlumno(alumnoId);
    return alumno;
};

const createNewAlumno = async (nombres, apellidos, telefono, direccion) => {
    const alumno = await alumnoService.createNewAlumno(nombres, apellidos, telefono, direccion);
    return alumno;
};

const updateOneAlumno = async (alumnoId, nombres, apellidos, telefono, direccion) => {
    const alumno = await alumnoService.updateOneAlumno(alumnoId, nombres, apellidos, telefono, direccion);
    return alumno;
};

const deleteOneAlumno = async (alumnoId) => {
    const alumno = await alumnoService.deleteOneAlumno(alumnoId);
    return alumno;
}

module.exports = {
    getAllAlumnos,
    getOneAlumno,
    createNewAlumno,
    updateOneAlumno,
    deleteOneAlumno,
};