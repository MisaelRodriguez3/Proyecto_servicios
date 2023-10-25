const mealProceso = require('../procesos/mealProceso');

const getCategories = async (req, res) => {
    const categories = await mealProceso.getCategories();
    res.send(categories);
};

module.exports = {
    getCategories,
}