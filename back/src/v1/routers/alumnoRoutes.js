const express = require('express');
const router = express.Router();
const alumnoController = require("../../controllers/alumnoController");

router
    .get('/', alumnoController.getAllAlumnos)
    .get('/:alumnoId', alumnoController.getOneAlumno)
    .post('/', alumnoController.createNewAlumno)
    .patch('/:alumnoId', alumnoController.updateOneAlumno)
    .delete('/:alumnoId', alumnoController.deleteOneAlumno);
module.exports = router;