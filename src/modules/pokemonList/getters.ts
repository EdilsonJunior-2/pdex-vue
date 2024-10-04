import { PokemonState } from "./store";

const getters = {
  getPokemonList(state: PokemonState) {
    return state.pokemonList;
  },
  getPokemonListCount(state: PokemonState) {
    return state.count;
  },
  getLimit(state: PokemonState) {
    return state.limit;
  },
  getTotal(state: PokemonState) {
    return state.total;
  },
};

export default getters;
