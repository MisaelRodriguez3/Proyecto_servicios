const mealService = require('../services/mealService');

const getCategories = async () => {
    const categories = await mealService.getCategories();
    return categories;
};

module.exports = {
    getCategories,
}