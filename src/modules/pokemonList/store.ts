import ListItem from "@/commons/classes/lists/listItem";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const pokemonModule = {
  namespaced: true,
  state: () =>
    <PokemonState>{
      pokemonList: [],
      count: 0,
      limit: 50,
      total: 0,
    },
  getters,
  actions,
  mutations,
};

export default pokemonModule;

export interface PokemonState {
  pokemonList: ListItem[];
  count: number;
  limit: number;
  total: number;
}
