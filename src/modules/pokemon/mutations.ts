import { PokemonState } from "./store";
import ListItem from "@/commons/classes/lists/listItem";

const mutations = {
  setPokemonList(
    state: PokemonState,
    props: { results: ListItem[]; count: number }
  ) {
    state.pokemonList = props.results;
    state.total = props.count;
  },
  setTotal(state: PokemonState, newTotal: number) {
    state.total = newTotal;
  },
  setOffset(state: PokemonState, newOffset: number) {
    state.offset = newOffset;
  },
  setNameFilter(state: PokemonState, newNameFilter: string) {
    state.nameFilter = newNameFilter;
  },
  setIdFilter(state: PokemonState, newIdFilter: string) {
    state.idFilter = newIdFilter;
  },
  setLimit(state: PokemonState, newLimit: number) {
    state.limit = newLimit >= state.total ? state.total : newLimit;
  },
};

export default mutations;
