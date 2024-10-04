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
};

export default mutations;
