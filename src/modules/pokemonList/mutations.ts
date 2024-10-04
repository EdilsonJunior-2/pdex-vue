import { PokemonState } from "./store";
import ListItem from "@/commons/classes/lists/listItem";

const mutations = {
  setPokemonList(
    state: PokemonState,
    props: { results: ListItem[]; count: number }
  ) {
    state.pokemonList = props.results;
    state.count = props.count;
  },
  setLimit(state: PokemonState, newLimit: number) {
    state.limit = newLimit;
  },
  setTotal(state: PokemonState, newTotal: number) {
    state.total = newTotal;
  },
};

export default mutations;
