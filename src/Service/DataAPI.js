function DataAPI(params = {}) {
  const ENDPOINT = "https://rickandmortyapi.com/api/character";
  const searchParams = new URLSearchParams();
  for (let fieldName in params) {
    searchParams.append(fieldName, params[fieldName]);
  }
  return fetch(ENDPOINT + "?" + searchParams.toString())
    .then((response) => response.json())
    .then((response) => {
      const characterArray = response.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          image: character.image,
          episode: character.episode.length,
          origin: character.origin.name,
        };
      });
      return { characterArray, totalPages: response.info.pages };
    });
}

export { DataAPI };
