function DataCharacterAPI(params = {}) {
  const ENDPOINT = "https://rickandmortyapi.com/api/character";
  const searchParams = new URLSearchParams();
  for (let fieldName in params) {
    if (params[fieldName]) {
      console.log(params[fieldName]);
      searchParams.append(fieldName, params[fieldName]);
    }
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
        };
      });
      return { characterArray, totalPages: response.info.pages };
    });
}

function DataSingleCharacterAPI(id) {
  const ENDPOINT = "https://rickandmortyapi.com/api/character/";
  return fetch(ENDPOINT + id)
    .then((response) => response.json())
    .then((response) => {
      return {
        id: response.id,
        name: response.name,
        status: response.status,
        species: response.species,
        type: response.type,
        image: response.image,
        episode: response.episode,
        origin: response.origin.name,
        location: response.location.name,
      };
    });
}

function DataLocationAPI(params = {}) {
  const ENDPOINT = "https://rickandmortyapi.com/api/location";
  const searchParams = new URLSearchParams();
  for (let fieldName in params) {
    if (params[fieldName]) {
      console.log(params[fieldName]);
      searchParams.append(fieldName, params[fieldName]);
    }
  }
  return fetch(ENDPOINT + "?" + searchParams.toString())
    .then((response) => response.json())
    .then((response) => {
      const locationArray = response.results.map((location) => {
        return {
          id: location.id,
          name: location.name,
          type: location.type,
          dimension: location.dimension,
          residents: location.residents.length,
        };
      });
      return { locationArray, totalPages: response.info.pages };
    });
}

function DataSingleLocationAPI(id) {
  const ENDPOINT = "https://rickandmortyapi.com/api/location/";
  return fetch(ENDPOINT + id)
    .then((response) => response.json())
    .then((response) => {
      return {
        id: response.id,
        name: response.name,
        type: response.type,
        dimension: response.dimension,
        residents: response.residents,
      };
    });
}

function DataEpisodeAPI(params = {}) {
  const ENDPOINT = "https://rickandmortyapi.com/api/episode";
  const searchParams = new URLSearchParams();
  for (let fieldName in params) {
    if (params[fieldName]) {
      console.log(params[fieldName]);
      searchParams.append(fieldName, params[fieldName]);
    }
  }
  return fetch(ENDPOINT + "?" + searchParams.toString())
    .then((response) => response.json())
    .then((response) => {
      const episodeArray = response.results.map((episode) => {
        return {
          id: episode.id,
          name: episode.name,
          air_date: episode.air_date,
          episode: episode.episode,
          characters: episode.characters.length,
        };
      });
      return { episodeArray, totalPages: response.info.pages };
    });
}

function DataSingleEpisodeAPI(id) {
  const ENDPOINT = "https://rickandmortyapi.com/api/episode/";
  return fetch(ENDPOINT + id)
    .then((response) => response.json())
    .then((response) => {
      return {
        id: response.id,
        name: response.name,
        air_date: response.air_date,
        episode: response.episode,
        characters: response.characters,
      };
    });
}

export {
  DataCharacterAPI,
  DataSingleCharacterAPI,
  DataLocationAPI,
  DataEpisodeAPI,
  DataSingleLocationAPI,
  DataSingleEpisodeAPI,
};
