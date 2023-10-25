const getChuckNorris = async () => {
    const response = fetch('https://api.chucknorris.io/jokes/random');
    const chuck = (await response).json();
    return chuck;
};

module.exports = {
    getChuckNorris,
};