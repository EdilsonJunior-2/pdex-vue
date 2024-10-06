import ListItem from "@/commons/classes/lists/listItem";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import Pokemon from "@/commons/classes/pokemon";

const pokemonModule = {
  state: () =>
    <PokemonState>{
      pokemonList: [],
      selectedPokemon: null,
      total: 51,
      offset: 0,
      limit: 50,
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
  selectedPokemon: Pokemon | null;
  total: number;
  offset: number;
  limit: number;
  nameFilter: string;
  idFilter: string;
}
