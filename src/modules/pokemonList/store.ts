import ListItem from "@/commons/classes/lists/listItem";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const pokemonModule = {
  namespaced: true,
  state: () =>
    <PokemonState>{
      pokemonList: [],
      limit: 50,
      total: 0,
      offset: 20,
    },
  getters,
  actions,
  mutations,
};

export default pokemonModule;

export interface PokemonState {
  pokemonList: ListItem[];
  limit: number;
  total: number;
  offset: number;
}
