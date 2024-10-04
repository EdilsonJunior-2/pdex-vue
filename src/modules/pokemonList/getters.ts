import { PokemonState } from "./store";

const getters = {
  getPokemonList(state: PokemonState) {
    return state.pokemonList;
  },
  getLimit(state: PokemonState) {
    return state.limit;
  },
  getTotal(state: PokemonState) {
    return state.total;
  },
  getOffset(state: PokemonState) {
    return state.offset;
  },
};

export default getters;
