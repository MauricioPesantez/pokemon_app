import axios from "axios";

const isServer = typeof window === "undefined";
const BASE_URL = isServer
  ? process.env.NEXT_PUBLIC_SERVER_API_BASE_URL
  : process.env.NEXT_PUBLIC_CLIENT_API_BASE_URL;

const _axios = axios.create({
  baseURL: BASE_URL,
});

const paramNotEmpty = (param) =>
  param !== null && param !== undefined && param.toString().trim() !== "";

const formatParams = (params) => {
  const result = [];
  Object.keys(params).forEach((key) => {
    const param = params[key];
    if (paramNotEmpty(param)) result.push(`${key}=${param}`);
  });
  return result.length ? "?" + result.join("&") : "";
};

const middleware = (response, middlewares) => {
  response.catch((error) => {
    if (middlewares?.length) {
      middlewares.forEach((_middleware) => {
        _middleware(error.response);
      });
    }
    if (error?.response?.status && error.response.statusText) {
      Sentry.captureException(
        `${error.response.status} - ${error.response.statusText}`
      );
    } else {
      Sentry.captureException(error);
    }
  });
  return response;
};

const ApiClient = {
  getPokemons() {
    const params = { idAuthor: 1 };
    return middleware(_axios.get(`/${formatParams(params)}`));
  },
  addPokemon(pokemon) {
    const data = {
      name: pokemon.name,
      image: pokemon.image,
      attack: pokemon.attack,
      defense: pokemon.defense,
      hp: pokemon.hp,
      type: pokemon.type,
      idAuthor: 1,
    }
    return middleware(_axios.post(`/`, data));
  },
  editPokemon(pokemon) {
    const data = {
      name: pokemon.name,
      image: pokemon.image,
      attack: pokemon.attack,
      defense: pokemon.defense,
      hp: pokemon.hp,
      type: pokemon.type,
      idAuthor: 1,
    }
    return middleware(_axios.put(`/${pokemon.id}`, data))

  },
  deletePokemon(pokemon) {
    return middleware(_axios.delete(`/${pokemon.id}`))
  }
};

export default ApiClient;
