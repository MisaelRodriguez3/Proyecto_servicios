const express = require('express');
const router = express.Router();
const materiasController = require('../../controllers/materiasController');

router
    .get('/', materiasController.getAllMaterias)
    .get('/:idMateria', materiasController.getOneMateria)
    .post('/', materiasController.createNewMateria)
    .patch('/:idMateria', materiasController.updateOneMateria)
    .delete('/:idMateria', materiasController.deleteOneMateria)
module.exports = router;