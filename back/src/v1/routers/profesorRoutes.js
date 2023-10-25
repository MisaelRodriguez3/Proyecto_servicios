const express = require('express');
const router = express.Router();
const profesorController = require('../../controllers/profesorController');

router
    .get('/', profesorController.getAllProfesores)
    .get('/:idProfesor', profesorController.getOneProfesor)
    .post('/', profesorController.createNewProfesor)
    .patch('/:idProfesor', profesorController.updateOneProfesor)
    .delete('/:idProfesor', profesorController.deleteOneProfesor)
module.exports = router;