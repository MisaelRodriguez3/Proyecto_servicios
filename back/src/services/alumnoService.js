const alumnoBD = require('../database/alumnoBD');

const getAllAlumnos = async () => {
    const alumnos = await alumnoBD.getAllAlumnos();
    return alumnos;
};

const getOneAlumno = async (alumnoId) => {
    const alumno = await alumnoBD.getOneAlumno(alumnoId);
    return alumno;
};

const createNewAlumno = async (nombres, apellidos, telefono, direccion) => {
    const alumno = await alumnoBD.createNewAlumno(nombres, apellidos, telefono, direccion);
    return alumno;
};

const updateOneAlumno = async (alumnoId, nombres, apellidos, telefono, direccion) => {
    const alumno = await alumnoBD.updateOneAlumno(alumnoId, nombres, apellidos, telefono, direccion);
    return alumno;
};

const deleteOneAlumno = async (alumnoId) => {
    const alumno = await alumnoBD.deleteOneAlumno(alumnoId);
    return alumno;
}

module.exports = {
    getAllAlumnos,
    getOneAlumno,
    createNewAlumno,
    updateOneAlumno,
    deleteOneAlumno,
};