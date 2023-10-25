const express = require('express');
const router = express.Router();
const mealController = require('../../controllers/mealController');

router
    .get('/', mealController.getCategories);
module.exports = router;