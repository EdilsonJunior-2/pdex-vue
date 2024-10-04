import ListItem from "@/commons/classes/lists/listItem";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const pokemonModule = {
  state: () =>
    <PokemonState>{
      pokemonList: [],
      total: 0,
      offset: 0,
      limit: 20,
      nameFilter: "",
      idFilter: "",
    },
  getters,
  actions,
  mutations,
};

export default pokemonModule;

export interface PokemonState {
  pokemonList: ListItem[];
  total: number;
  offset: number;
  limit: number;
  nameFilter: string;
  idFilter: string;
}
