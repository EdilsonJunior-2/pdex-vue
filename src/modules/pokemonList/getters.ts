import { PokemonState } from "./store";

const getters = {
  getPokemonList(state: PokemonState) {
    return state.pokemonList;
  },
};

export default getters;
