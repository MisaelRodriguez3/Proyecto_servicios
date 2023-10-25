const express = require('express');
const router = express.Router();
const rickandmortyController = require('../../controllers/rickandmortyController');

router
    .get('/', rickandmortyController.getPersonajes);
module.exports = router;