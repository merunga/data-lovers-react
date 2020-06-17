export default (url, searchText) => {
  return fetch(url || `https://rickandmortyapi.com/api/character${searchText ? `?name=${searchText}` : ''}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        return {
          info: {},
          results: [],
        }
      }
      return data;
    });
};
