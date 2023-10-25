const connection = require('./conexion');

const getAllAlumnos = async () => {
    return new Promise(function (resolve, reject) {
        const sql = 'select * from alumnos;';
        connection.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};

const getOneAlumno = async (alumnoId) => {
    return new Promise(function (resolve, reject) {
        const sql = `select * from alumnos where idAlumnos = ${alumnoId};`;
        connection.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            };
            resolve(results);
        });
    });
};

const createNewAlumno = async (nombres, apellidos, telefono, direccion) => {
    return new Promise(function (resolve, reject) {
        const sql = `insert into alumnos (Nombre, Apellido, Telefono, Direccion) 
                     values ("${nombres}", "${apellidos}", "${telefono}", "${direccion}")`;
        connection.query(sql, (error) => {
            if (error) {
                return reject(error);
            };
            resolve("Alumno agregado");
        });
    });
};

const updateOneAlumno = async (alumnoId, nombres, apellidos, telefono, direccion) => {
    return new Promise(function (resolve, reject) {
        const sql = `update alumnos set Nombre = "${nombres}", Apellido = "${apellidos}", 
                     Telefono = "${telefono}", Direccion = "${direccion}" where idAlumnos = ${alumnoId};`;
        connection.query(sql, (error) => {
            if (error) {
                return reject(error);
            };
            resolve("Alumno actualizado correctamente");
        });
    });
};

const deleteOneAlumno = async (alumnoId) => {
    return new Promise(function (resolve, reject) {
        const sql = `delete from alumnos where idAlumnos = ${alumnoId};`;
        connection.query(sql, (error) => {
            if (error) {
                return reject(error);
            };
            resolve("Alumno eliminado");
        });
    });
};

module.exports = {
    getAllAlumnos,
    getOneAlumno,
    createNewAlumno,
    updateOneAlumno,
    deleteOneAlumno,
    connection,
};