const connection = require('./conexion');

const getAllMaterias = async () => {
    return new Promise((resolve, reject) => {
        const sql = 'select * from materias;';
        connection.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            };
            resolve(results);
        });
    });
};

const getOneMateria = async (idMateria) => {
    return new Promise((resolve, reject) => {
        const sql = `select * from materias where idMateria = ${idMateria};`;
        connection.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            };
            resolve(results);
        });
    });
};

const createNewMateria = async (nombreMateria) => {
    return new Promise((resolve, reject) => {
        const sql = `insert into materias(nombreMateria) values("${nombreMateria}");`;
        connection.query(sql, (error) => {
            if (error) {
                return reject(error);
            };
            resolve("Materia agregada");
        });
    });
};

const updateOneMateria = async (idMateria, nombreMateria) => {
    return new Promise((resolve, reject) => {
        const sql = `update materias set nombreMateria = "${nombreMateria}" where idMateria = ${idMateria};`;
        connection.query(sql, (error) => {
            if (error) {
                return reject(error);
            };
            resolve("Materia actualizada");
        });
    });
};

const deleteOneMateria = async (idMateria) => {
    return new Promise((resolve, reject) => {
        const sql = `delete from materias where idMateria = ${idMateria};`;
        connection.query(sql, (error) => {
            if (error) {
                return reject(error);
            };
            resolve("Materia eliminada");
        });
    });
};

module.exports = {
    getAllMaterias,
    getOneMateria,
    createNewMateria,
    updateOneMateria,
    deleteOneMateria,
};