export default (url) => {
  return fetch(url || 'https://rickandmortyapi.com/api/character')
    .then((response) => response.json());
};
