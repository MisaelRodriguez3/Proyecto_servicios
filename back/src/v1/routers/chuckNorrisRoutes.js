const express = require('express');
const router = express.Router();
const chuckNorrisController = require('../../controllers/chuckNorrisController');

router
    .get('/', chuckNorrisController.getChuckNorris);
module.exports = router;