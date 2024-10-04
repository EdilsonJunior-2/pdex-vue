import { createStore } from "vuex";
import pokemonModule from "./modules/pokemon/store";
import typeModule from "./modules/type/store";

export default createStore({
  modules: {
    pokemonModule,
    typeModule,
  },
});
