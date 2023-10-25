const getCategories = async () => {
    const response = fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const categories = (await response).json();
    return categories;
};

module.exports = {
    getCategories,
}