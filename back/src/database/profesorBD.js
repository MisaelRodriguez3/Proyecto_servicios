const connection = require('./conexion');

const getAllProfesores = async () => {
    return new Promise((resolve, reject) => {
        const sql = 'select * from profesores;';
        connection.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            };
            resolve(results);
        });
    });
};

const getOneProfesor = async (idProfesor) => {
    return new Promise((resolve, reject) => {
        const sql = `select * from profesores where idProfesor = ${idProfesor};`;
        connection.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            };
            resolve(results);
        });
    });
};

const createNewProfesor = async (Nombre, Apellido, Correo) => {
    return new Promise((resolve, reject) => {
        const sql = `insert into profesores(Nombre, Apellido, Correo) 
                values("${Nombre}", "${Apellido}", "${Correo}");`;
        connection.query(sql, (error) => {
            if (error) {
                return reject(error);
            };
            resolve("Profesor agregado");
        });
    });
};

const updateOneProfesor = async (idProfesor, Nombre, Apellido, Correo) => {
    return new Promise((resolve, reject) => {
        const sql = `update profesores set Nombre = "${Nombre}", Apellido = "${Apellido}", Correo = "${Correo}" 
                     where idProfesor = ${idProfesor};`;
        connection.query(sql, (error) => {
            if (error) {
                return reject(error);
            };
            resolve("Profesor actualizado");
        });
    });
};

const deleteOneProfesor = async (idProfesor) => {
    return new Promise((resolve, reject) => {
        const sql = `delete from profesores where idProfesor = ${idProfesor};`;
        connection.query(sql, (error) => {
            if (error) {
                return reject(error);
            };
            resolve("Profesor eliminado");
        });
    });
};

module.exports = {
    getAllProfesores,
    getOneProfesor,
    createNewProfesor,
    updateOneProfesor,
    deleteOneProfesor,
}