const getPersonajes = async () => {
    const response = fetch('https://rickandmortyapi.com/api/character/1,183');
    const personajes = (await response).json();
    return personajes;
};

module.exports = {
    getPersonajes,
};