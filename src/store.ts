import { createStore } from "vuex";
import pokemonModule from "./modules/pokemonList/store";

export default createStore({
  modules: {
    pokemonModule,
  },
});
