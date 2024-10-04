import ListItem from "@/commons/classes/lists/listItem";
import { PokemonState } from "./store";

const getters = {
  getPokemonList(state: PokemonState) {
    return state.pokemonList;
  },
  getFilteredPokemonList(state: PokemonState, getters: any): ListItem[] {
    const type = getters.getType;
    const pokemonByTypeList = type
      ? state.pokemonList.filter((pokemon: ListItem) => {
          type.pokemon.find(
            (pokemonByType: ListItem) => pokemon.id === pokemonByType.id
          );
        })
      : state.pokemonList;
    return pokemonByTypeList
      .filter(
        (poke) =>
          poke.name.toLowerCase().includes(state.nameFilter.toLowerCase()) &&
          poke.id.toString().includes(state.idFilter)
      )
      .slice(state.offset, state.limit + state.offset);
  },
  getTotal(state: PokemonState) {
    return state.total;
  },
  getOffset(state: PokemonState) {
    return state.offset;
  },
  getLimit(state: PokemonState) {
    return state.limit;
  },
};

export default getters;
